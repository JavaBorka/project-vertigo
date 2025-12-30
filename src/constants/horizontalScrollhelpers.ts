export const DEFAULT_GAP_PX = 16;
export const SCROLL_EDGE_THRESHOLD_PX = 1;
export const FALLBACK_CHILD_WIDTH_RATIO = 0.8;

export type ScrollDirection = 'left' | 'right';

export const getMaxScrollLeft = (scrollContainer: HTMLElement): number => {
  return scrollContainer.scrollWidth - scrollContainer.clientWidth;
};

export const canScrollLeft = (scrollContainer: HTMLElement): boolean => {
  return scrollContainer.scrollLeft > SCROLL_EDGE_THRESHOLD_PX;
};

export const canScrollRight = (scrollContainer: HTMLElement): boolean => {
  const maxScrollLeft = getMaxScrollLeft(scrollContainer);
  return scrollContainer.scrollLeft < maxScrollLeft - SCROLL_EDGE_THRESHOLD_PX;
};

export const getGapPx = (element: HTMLElement): number => {
  const computedStyles = getComputedStyle(element);
  const gapValue =
    (computedStyles as any).columnGap || (computedStyles as any).gap;

  const parsedGapPx = parseFloat(gapValue ?? '');
  return Number.isNaN(parsedGapPx) ? DEFAULT_GAP_PX : parsedGapPx;
};

export const getFirstChildWidthPx = (scrollContainer: HTMLElement): number => {
  const firstChildElement =
    scrollContainer.firstElementChild as HTMLElement | null;

  return firstChildElement
    ? firstChildElement.getBoundingClientRect().width
    : scrollContainer.clientWidth * FALLBACK_CHILD_WIDTH_RATIO;
};

export const getScrollDeltaPx = (scrollContainer: HTMLElement): number => {
  return getFirstChildWidthPx(scrollContainer) + getGapPx(scrollContainer);
};
