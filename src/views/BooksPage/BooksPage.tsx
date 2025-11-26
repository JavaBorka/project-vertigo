import React, { JSX } from 'react';
import FiltersWithSidebar from './components/FiltersWithSidebar';
import Main from 'layouts/Main';

const BooksPage = () => {
  return (
    <Main>
      <FiltersWithSidebar />
    </Main>
  );
};

export default BooksPage;
