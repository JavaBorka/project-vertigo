import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, useLocation } from 'react-router-dom';
import Page from './components/Page';
import { Routes, Route } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { initRemoteConfig } from './remoteConfig';
import PortfolioPage from 'views/PortfolioPage';
import BooksPage from 'views/BooksPage';
import AuthorsPage from 'views/AuthorsPage';
import AuthorDetailPage from 'views/AuthorDetailPage.tsx';
import { ContactPageCover, NotFoundCover } from 'views';
import {
  ROUTE_ABOUT,
  ROUTE_AUTHOR_DETAIL,
  ROUTE_AUTHORS,
  ROUTE_KIDS,
  ROUTE_POEM,
  ROUTE_PROSE,
  ROUTE_SCIENCE,
  ROUTE_VERTIGO,
} from 'constants/routes';
import {
  KIDS_CAT_ID,
  POEM_CAT_ID,
  PROSE_CAT_ID,
  SCIENCE_CAT_ID,
  VERTIGO_CAT_ID,
} from 'constants/categoryID';

const AOSRouteRefresher = (): null => {
  const location = useLocation();
  React.useEffect(() => {
    try {
      AOS.refresh();
      // In SPAs, new route content can mount after refresh() runs.
      // Scheduling a refreshHard on the next tick helps avoid elements staying hidden
      // until a resize/reflow (e.g. opening DevTools) happens.
      requestAnimationFrame(() => {
        try {
          AOS.refreshHard();
        } catch {
          /* noop */
        }
      });
    } catch {
      /* noop */
    }
  }, [location.pathname]);
  return null;
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await initRemoteConfig();
      setIsLoading(false);
    })();
  }, []);

  // Re-init/refresh AOS after loading finishes and the DOM is mounted
  useEffect(() => {
    if (!isLoading) {
      try {
        AOS.init({
          once: true,
          delay: 50,
          duration: 500,
          easing: 'ease-in-out',
          offset: 50,
        });
        // Run after paint as well to ensure route content is in the DOM
        requestAnimationFrame(() => {
          try {
            AOS.refreshHard();
          } catch {
            /* noop */
          }
        });
        // And once more shortly after, in case images/fonts shift layout
        setTimeout(() => {
          try {
            AOS.refreshHard();
          } catch {
            /* noop */
          }
        }, 150);
      } catch {
        /* noop */
      }
    }
  }, [isLoading]);

  // Refresh once more on full window load (images/fonts can shift layout)
  useEffect(() => {
    if (isLoading) return;
    const handleWindowLoad = () => {
      try {
        AOS.refreshHard();
      } catch {
        /* noop */
      }
    };
    window.addEventListener('load', handleWindowLoad);
    return () => window.removeEventListener('load', handleWindowLoad);
  }, [isLoading]);

  if (isLoading) return null;

  return (
    <Page>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/not-found-cover" element={<NotFoundCover />} />
          <Route
            path={`/${ROUTE_SCIENCE}`}
            element={<BooksPage catId={SCIENCE_CAT_ID} />}
          />
          <Route
            path={`/${ROUTE_POEM}`}
            element={<BooksPage catId={POEM_CAT_ID} />}
          />
          <Route
            path={`/${ROUTE_PROSE}`}
            element={<BooksPage catId={PROSE_CAT_ID} />}
          />
          <Route
            path={`/${ROUTE_KIDS}`}
            element={<BooksPage catId={KIDS_CAT_ID} />}
          />
          <Route
            path={`/${ROUTE_VERTIGO}`}
            element={<BooksPage catId={VERTIGO_CAT_ID} />}
          />
          <Route path={`/${ROUTE_AUTHORS}`} element={<AuthorsPage />} />
          <Route
            path={`/${ROUTE_AUTHOR_DETAIL}`}
            element={<AuthorDetailPage />}
          />
          <Route path={`/${ROUTE_ABOUT}`} element={<ContactPageCover />} />
          <Route
            path="*"
            element={<Navigate replace to="/not-found-cover" />}
          />
        </Routes>
        <AOSRouteRefresher />
      </BrowserRouter>
    </Page>
  );
};

export default App;
