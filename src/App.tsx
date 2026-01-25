import React, { useEffect } from 'react';
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

const AOSRouteRefresher = (): null => {
  const location = useLocation();
  React.useEffect(() => {
    try {
      AOS.refresh();
    } catch {
      /* noop */
    }
  }, [location.pathname]);
  return null;
};

const App = () => {
  useEffect(() => {
    initRemoteConfig();
  }, []);

  return (
    <Page>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/not-found-cover" element={<NotFoundCover />} />
          <Route path="/veda" element={<BooksPage />} />
          <Route path="/poezia" element={<BooksPage />} />
          <Route path="/proza" element={<BooksPage />} />
          <Route path="/deti" element={<BooksPage />} />
          <Route path="/vertigo" element={<BooksPage />} />
          <Route path="/autori" element={<AuthorsPage />} />
          <Route path="/nazov-autora" element={<AuthorDetailPage />} />
          <Route path="/onas" element={<ContactPageCover />} />
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
