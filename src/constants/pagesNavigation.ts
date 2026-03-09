import { ROUTE_SCIENCE, ROUTE_POEM, ROUTE_PROSE, ROUTE_KIDS } from './routes';

const pages = {
  books: [
    {
      title: 'Poézia',
      href: `/${ROUTE_POEM}`,
    },
    {
      title: 'Próza',
      href: `/${ROUTE_PROSE}`,
    },
    {
      title: 'Veda',
      href: `/${ROUTE_SCIENCE}`,
    },
    {
      title: 'Deti',
      href: `/${ROUTE_KIDS}`,
    },
  ],
  vertigo: [],
  about: [],
  authors: [],
};

export default pages;
