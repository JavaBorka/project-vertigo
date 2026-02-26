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
    let cancelled = false;

    (async () => {
      try {
        await initRemoteConfig();
      } catch (err) {
        console.error('initRemoteConfig failed', err);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
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
        requestAnimationFrame(() => {
          try {
            AOS.refreshHard();
          } catch {
            /* noop */
          }
        });
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
            path={`/${ROUTE_AUTHORS}/:author`}
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
