import React from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Routes from './Routes';
import Page from './components/Page';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

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

const App = (): JSX.Element => {
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
