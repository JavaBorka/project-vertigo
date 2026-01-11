import React from 'react';

import {
  PortfolioPage as PortfolioPageView,
  NotFoundCover as NotFoundCoverView,
  BooksPage as BooksPageView,
  AuthorsPage as AuthorsPageView,
  // Rental as RentalView,
  ContactPageCover as ContactPageCoverView,
  AuthorDetailPage as AuthorDetailPageView,
} from 'views';

const routes = [
  {
    path: '/',
    renderer: (params = {}) => <PortfolioPageView {...params} />,
  },
  {
    path: '/not-found-cover',
    renderer: (params = {}) => <NotFoundCoverView {...params} />,
  },
  {
    path: '/veda',
    renderer: (params = {}) => <BooksPageView {...params} />,
  },
  {
    path: '/poezia',
    renderer: (params = {}) => <BooksPageView {...params} />,
  },
  {
    path: '/proza',
    renderer: (params = {}) => <BooksPageView {...params} />,
  },
  {
    path: '/deti',
    renderer: (params = {}) => <BooksPageView {...params} />,
  },
  {
    path: '/vertigo',
    renderer: (params = {}) => <BooksPageView {...params} />,
  },
  {
    path: '/autori',
    renderer: (params = {}) => <AuthorsPageView {...params} />,
  },
  {
    path: '/nazov-autora',
    renderer: (params = {}) => <AuthorDetailPageView {...params} />,
  },
  {
    path: '/onas',
    renderer: (params = {}) => <ContactPageCoverView {...params} />,
  },
  // {
  //   path: '/rental',
  //   renderer: (params = {}) => <RentalView {...params} />,
  // },
];

export default routes;
