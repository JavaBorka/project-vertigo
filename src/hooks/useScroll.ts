import * as React from 'react';
import {
  canScrollLeft,
  canScrollRight,
  getScrollDeltaPx,
  ScrollDirection,
} from 'utils/horizontalScrollhelpers';

export const useScroll = () => {
  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  const [canLeft, setCanLeft] = React.useState(false);
  const [canRight, setCanRight] = React.useState(true);

  const updateArrows = React.useCallback(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    setCanLeft(canScrollLeft(scrollContainer));
    setCanRight(canScrollRight(scrollContainer));
  }, []);

  React.useEffect(() => {
    updateArrows();

    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const onScroll = () => updateArrows();

    scrollContainer.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateArrows);

    return () => {
      scrollContainer.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateArrows);
    };
  }, [updateArrows]);

  const scrollByOne = React.useCallback((direction: ScrollDirection) => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const delta = getScrollDeltaPx(scrollContainer);

    scrollContainer.scrollBy({
      left: direction === 'left' ? -delta : delta,
      behavior: 'smooth',
    });
  }, []);

  return {
    scrollRef,
    canLeft,
    canRight,
    scrollByOne,
  };
};
