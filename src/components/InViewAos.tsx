import React from 'react';
import { useLocation } from 'react-router-dom';
import { createInViewAos } from 'utils/inViewAos';

export default function InViewAos(): null {
  const location = useLocation();
  const mgrRef = React.useRef<ReturnType<typeof createInViewAos> | null>(null);

  // Run before paint to avoid initial flash on first load
  React.useLayoutEffect(() => {
    mgrRef.current = createInViewAos({
      once: false,
      offset: 50,
      threshold: 0.01,
    });
    mgrRef.current.refresh();
    return () => {
      mgrRef.current?.destroy();
      mgrRef.current = null;
    };
  }, []);

  React.useEffect(() => {
    // Refresh on navigation (new content mounted)
    mgrRef.current?.refresh();
    // Also re-check after paint
    requestAnimationFrame(() => mgrRef.current?.refresh());
  }, [location.pathname]);

  return null;
}
