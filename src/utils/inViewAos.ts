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

function setIfPresentStyle(el: HTMLElement, prop: keyof CSSStyleDeclaration, value?: string) {
  if (!value) return;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
            el.classList.add('io-animate');
            if (opts.once || el.getAttribute('data-aos-once') === 'true') {
              io.unobserve(el);
            }
          } else if (!opts.once && el.getAttribute('data-aos-once') !== 'true') {
            el.classList.remove('io-animate');
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

  const refresh = () => {
    const nodes = document.querySelectorAll('[data-aos]');
    nodes.forEach((el) => {
      initElement(el);
      if (!observed.has(el)) {
        observed.add(el);
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

