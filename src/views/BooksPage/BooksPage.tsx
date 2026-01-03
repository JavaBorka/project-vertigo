import Main from 'layouts/Main';
import ProductGrid from './components/ProductGrid';
import { Typography } from '@mui/material';
import Container from 'components/Container';

const pathname =
  typeof window !== 'undefined' && window.location
    ? window.location.pathname
    : '';
const pathColorMap: Record<string, string> = {
  '/': 'primary.main',
  '/poezia': 'primary.poetry',
  '/proza': 'primary.prose',
  '/veda': 'primary.science',
  '/deti': 'primary.main',
  '/vertigo': 'primary.main',
  '/autori': 'primary.main',
  '/onas': 'primary.main',
};
const mappedColor = pathColorMap[pathname];

const BooksPage = () => {
  return (
    <Main>
      <Container>
        <Typography
          color={mappedColor}
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
        <ProductGrid />
      </Container>
    </Main>
  );
};

export default BooksPage;
