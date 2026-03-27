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
  once: true,
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
  const animateElement = (
    el: HTMLElement,
    afterAnimate?: () => void,
  ) => {
    if (el.classList.contains('io-animate') || el.hasAttribute('data-io-animating')) {
      return;
    }
    el.setAttribute('data-io-animating', '1');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.classList.add('io-animate');
        el.removeAttribute('data-io-animating');
        afterAnimate?.();
      });
    });
  };

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
            animateElement(el, () => {
              if (opts.once || el.getAttribute('data-aos-once') === 'true') {
                io.unobserve(el);
              }
            });
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
    return rect.top < vh - offsetPx && rect.bottom > 0;
  };

  const refresh = () => {
    const nodes = document.querySelectorAll('[data-aos]');
    nodes.forEach((el) => {
      initElement(el);
      if (!observed.has(el)) {
        observed.add(el);
        const offset = parseNumberAttr(el, 'data-aos-offset') ?? opts.offset;
        if (typeof window !== 'undefined' && isInViewNow(el, offset)) {
          animateElement(el as HTMLElement);
          if (!(opts.once || (el as HTMLElement).getAttribute('data-aos-once') === 'true')) {
            observeElement(el);
          }
        } else {
          observeElement(el);
        }
      }
    });
  };

  const destroy = () => {
    observers.forEach((io) => io.disconnect());
    observers.clear();
  };

  return { refresh, destroy };
}
