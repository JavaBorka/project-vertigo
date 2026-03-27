import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate } from 'react-router-dom';
import Page from './components/Page';
import { Routes, Route } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
import { Box, CircularProgress } from '@mui/material';
import BooksProvider from 'context/BooksProvider';
import InViewAos from 'components/InViewAos';
import ScrollToTop from 'components/ScrollToTop';

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

  if (isLoading) {
    return (
      <Page>
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      </Page>
    );
  }

  return (
    <Page>
      <BrowserRouter>
        <BooksProvider>
          <Routes>
            <Route path="/" element={<PortfolioPage />} />
            <Route path="/not-found-cover" element={<NotFoundCover />} />
            <Route
              path={`/${ROUTE_SCIENCE}`}
              element={<BooksPage key={ROUTE_SCIENCE} catId={SCIENCE_CAT_ID} />}
            />
            <Route
              path={`/${ROUTE_POEM}`}
              element={<BooksPage key={ROUTE_POEM} catId={POEM_CAT_ID} />}
            />
            <Route
              path={`/${ROUTE_PROSE}`}
              element={<BooksPage key={ROUTE_PROSE} catId={PROSE_CAT_ID} />}
            />
            <Route
              path={`/${ROUTE_KIDS}`}
              element={<BooksPage key={ROUTE_KIDS} catId={KIDS_CAT_ID} />}
            />
            <Route
              path={`/${ROUTE_VERTIGO}`}
              element={<BooksPage key={ROUTE_VERTIGO} catId={VERTIGO_CAT_ID} />}
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
        </BooksProvider>
        <ScrollToTop />
        <InViewAos />
      </BrowserRouter>
    </Page>
  );
};

export default App;
