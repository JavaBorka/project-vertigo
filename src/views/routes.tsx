import React from 'react';

import {
  PortfolioPage as PortfolioPageView,
  NotFoundCover as NotFoundCoverView,
  BooksPage as BooksPageView,
  // Rental as RentalView,
  // ContactPageCover as ContactPageCoverView,
} from 'views';

const routes = [
  {
    path: '/',
    renderer: (params = {}): JSX.Element => <PortfolioPageView {...params} />,
  },
  {
    path: '/not-found-cover',
    renderer: (params = {}): JSX.Element => <NotFoundCoverView {...params} />,
  },
  {
    path: '/veda',
    renderer: (params = {}): JSX.Element => <BooksPageView {...params} />,
  },
  {
    path: '/poezia',
    renderer: (params = {}): JSX.Element => <BooksPageView {...params} />,
  },
  {
    path: '/proza',
    renderer: (params = {}): JSX.Element => <BooksPageView {...params} />,
  },
    {
    path: '/deti',
    renderer: (params = {}): JSX.Element => <BooksPageView {...params} />,
  },
  // {
  //   path: '/rental',
  //   renderer: (params = {}): JSX.Element => <RentalView {...params} />,
  // },
  // {
  //   path: '/contact-page-cover',
  //   renderer: (params = {}): JSX.Element => (
  //     <ContactPageCoverView {...params} />
  //   ),
  // },
];

export default routes;