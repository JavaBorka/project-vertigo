import Main from 'layouts/Main';
import ProductGrid from './components/ProductGrid';
import { Box, Typography } from '@mui/material';
import Container from 'components/Container';
import Pagination from 'components/Pagination';
import { useState } from 'react';
import { ITEMS_PER_PAGE } from 'constants/paginationSettings';
import getMappedColor from 'utils/getMappedColor';
import { handlePageChange } from 'types/pagination';
import { getRemoteJson } from '../../remoteConfig';

const BooksPage = () => {
  const [page, setPage] = useState<number>(1);

  const handlePageChange: handlePageChange = (_e, value) => {
    setPage(value);
  };

  const BOOKS_DATA = getRemoteJson('BOOKS_JSON');
  console.log(BOOKS_DATA);
  const BOOKS_TOTAL = BOOKS_DATA.length;
  const totalPages = Math.ceil(BOOKS_TOTAL / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const items = BOOKS_DATA.slice(start, end);

  return (
    <Main>
      <Container
        sx={{
          width: {
            xs: 0.8,
            sm: 1,
          },
        }}
      >
        <Typography
          color={getMappedColor()}
          sx={{
            pb: '1.5rem', // 24px
            fontSize: {
              xs: '1.3rem',
              sm: '1.5rem',
              md: '1.75rem',
            },
          }}
        >
          <strong>Poézia |</strong> svetové a slovenské básne
        </Typography>
        <ProductGrid items={items} />
        <Box
          sx={{
            mt: 3,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
          />
        </Box>
      </Container>
    </Main>
  );
};

export default BooksPage;
