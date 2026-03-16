type ObserverKey = string;

type InViewAosOptions = {
  /** Default behavior mirrors AOS once:true */
  once?: boolean;
  /** Intersection threshold */
  threshold?: number;
  /** Default offset in px (from bottom) */
  offset?: number;
};

const DEFAULTS: Required<InViewAosOptions> = {
  once: false,
  threshold: 0.01,
  offset: 50,
};

function parseNumberAttr(el: Element, name: string): number | undefined {
  const raw = el.getAttribute(name);
  if (!raw) return undefined;
  const n = Number.parseInt(raw, 10);
  return Number.isFinite(n) ? n : undefined;
}

function setIfPresentStyle(
  el: HTMLElement,
  prop: keyof CSSStyleDeclaration,
  value?: string,
) {
  if (!value) return;
  (el.style as any)[prop] = value;
}

export function createInViewAos(options?: InViewAosOptions) {
  const opts = { ...DEFAULTS, ...(options ?? {}) };

  const observed = new WeakSet<Element>();
  const observers = new Map<ObserverKey, IntersectionObserver>();

  const getObserver = (offsetPx: number) => {
    const key = String(offsetPx);
    const existing = observers.get(key);
    if (existing) return existing;

    const rootMargin = `0px 0px -${Math.max(0, offsetPx)}px 0px`;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            // If element was already visible on initial load, don't "auto animate".
            // Wait until it leaves once, then allow replay animations on re-enter.
            const isInitialInView =
              el.getAttribute('data-io-initial-inview') === '1';
            const hasLeftOnce = el.getAttribute('data-io-left-once') === '1';
            if (isInitialInView && !hasLeftOnce) {
              el.classList.add('io-animate');
              continue;
            }

            // Animate on enter (replay)
            if (!el.hasAttribute('data-io-animating')) {
              el.setAttribute('data-io-animating', '1');
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  el.classList.add('io-animate');
                  el.removeAttribute('data-io-animating');
                });
              });
            }
          } else {
            // Reset when leaving viewport so it can replay
            el.classList.remove('io-animate');
            if (el.getAttribute('data-io-initial-inview') === '1') {
              el.setAttribute('data-io-left-once', '1');
            }
          }
        }
      },
      { threshold: opts.threshold, root: null, rootMargin },
    );

    observers.set(key, io);
    return io;
  };

  const initElement = (el: Element) => {
    if (!(el instanceof HTMLElement)) return;
    if (el.hasAttribute('data-io-init')) return;

    el.setAttribute('data-io-init', '1');
    el.classList.add('io-init');

    const duration = parseNumberAttr(el, 'data-aos-duration');
    const delay = parseNumberAttr(el, 'data-aos-delay');

    // Provide defaults similar to your previous AOS.init config
    setIfPresentStyle(el, 'transitionDuration', `${duration ?? 500}ms`);
    setIfPresentStyle(el, 'transitionDelay', `${delay ?? 0}ms`);
    setIfPresentStyle(el, 'transitionProperty', 'opacity, transform');
    setIfPresentStyle(el, 'transitionTimingFunction', 'ease-in-out');
    setIfPresentStyle(el, 'willChange', 'opacity, transform');
  };

  const observeElement = (el: Element) => {
    const offset = parseNumberAttr(el, 'data-aos-offset') ?? opts.offset;
    const io = getObserver(offset);
    io.observe(el);
  };

  const isInViewNow = (el: Element, offsetPx: number) => {
    if (!(el instanceof HTMLElement)) return false;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight || 0;
    // Consider "in view" if top is within viewport plus offset
    return rect.top < vh - offsetPx && rect.bottom > 0;
  };

  const refresh = () => {
    const nodes = document.querySelectorAll('[data-aos]');
    nodes.forEach((el) => {
      initElement(el);
      if (!observed.has(el)) {
        observed.add(el);
        // If it starts visible on initial load, show it immediately (no delay),
        // but mark it so we don't auto-animate until user scrolls away and back.
        const offset = parseNumberAttr(el, 'data-aos-offset') ?? opts.offset;
        if (typeof window !== 'undefined' && isInViewNow(el, offset)) {
          (el as HTMLElement).setAttribute('data-io-initial-inview', '1');
          (el as HTMLElement).classList.add('io-animate');
        }
        observeElement(el);
      }
    });
  };

  const destroy = () => {
    observers.forEach((io) => io.disconnect());
    observers.clear();
  };

  return { refresh, destroy };
}
