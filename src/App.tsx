import React, { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Routes from './Routes';
import Page from './components/Page';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { initRemoteConfig } from './remoteConfig';

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
        <Routes />
        <AOSRouteRefresher />
      </BrowserRouter>
    </Page>
  );
};

export default App;
