import Main from 'layouts/Main';
import ProductGrid from './components/ProductGrid';
import { Box, Typography } from '@mui/material';
import Container from 'components/Container';
import Pagination from 'components/Pagination';
import { useState } from 'react';
import { ITEMS_PER_PAGE } from 'constants/paginationSettings';
import getMappedColor from 'utils/getMappedColor';
import { handlePageChange } from 'types/pagination';

const MOCK_DATA = [
  {
    media: '/assets/images/vertigo-obalka-1.png',
    title: 'Vertigo 4/2025',
    author: '',
    category: 'vertigo',
    label: 'Tak pekne rozprávaš po slovensky ani prízvuk nemáš',
    date: '2025-12-20',
    img: '',
    pdf: 'https://cs.wikipedia.org/wiki/Portable_Document_Format',
    href: 'https://www.artforum.sk/katalog/181748/vertigo-22023-priloha-poldoba-rozpadu',
  },
  {
    media: '/assets/images/kniha-obalka-1.jpg',
    title: ' Spoločný jazyk',
    author: 'Jürg Halter',
    category: 'poézia',
    label:
      'Zahľadíš sa na strop, nadchnutý vlastným nešťastím, pomaly prerastáš sám seba.',
    date: '2025-12-10',
    img: '',
    pdf: '',
    href: 'https://www.artforum.sk/katalog/186108/slovnik-diel-slovenskej-literatury-po-roku-1989',
  },
  {
    media: '/assets/images/vertigo-obalka-2.png',
    title: 'Vertigo 3/2025',
    author: '',
    category: 'vertigo',
    label: '',
    date: '2025-11-20',
    img: '',
    pdf: '',
    href: 'https://www.artforum.sk/katalog/170542/vertigo-12022-kniha-rozkvitni-pre-seba',
  },
  {
    media: '/assets/images/vertigo-obalka-3.png',
    title: 'Vertigo 2/2025',
    author: '',
    category: 'vertigo',
    label: 'Do konca prázdnin ostávali ešte tri týždne.',
    date: '2025-10-20',
    img: '',
    pdf: 'https://cs.wikipedia.org/wiki/Portable_Document_Format',
    href: 'https://www.artforum.sk/katalog/160739/vertigo-1-22021-kniha-nespavost',
  },
  {
    media: '/assets/images/vertigo-obalka-4.png',
    title: 'Vertigo 1/2025',
    author: '',
    category: 'vertigo',
    label: '',
    date: '2025-09-20',
    img: '',
    pdf: 'https://cs.wikipedia.org/wiki/Portable_Document_Format',
    href: '',
  },
  {
    media: '/assets/images/vertigo-obalka-1.png',
    title: 'Vertigo 4/2025',
    author: '',
    category: 'vertigo',
    label: 'Tak pekne rozprávaš po slovensky ani prízvuk nemáš',
    date: '2025-12-20',
    img: '',
    href: 'https://www.artforum.sk/katalog/181748/vertigo-22023-priloha-poldoba-rozpadu',
  },
  {
    media: '/assets/images/kniha-obalka-1.jpg',
    title: ' Spoločný jazyk',
    author: 'Jürg Halter',
    category: 'poézia',
    label:
      'Zahľadíš sa na strop, nadchnutý vlastným nešťastím, pomaly prerastáš sám seba.',
    date: '2025-12-10',
    img: '',
    pdf: '',
    href: 'https://www.artforum.sk/katalog/186108/slovnik-diel-slovenskej-literatury-po-roku-1989',
  },
  {
    media: '/assets/images/vertigo-obalka-2.png',
    title: 'Vertigo 3/2025',
    author: '',
    category: 'vertigo',
    label: '',
    date: '2025-11-20',
    img: '',
    pdf: '',
    href: 'https://www.artforum.sk/katalog/170542/vertigo-12022-kniha-rozkvitni-pre-seba',
  },
  {
    media: '/assets/images/vertigo-obalka-3.png',
    title: 'Vertigo 2/2025',
    author: '',
    category: 'vertigo',
    label: 'Do konca prázdnin ostávali ešte tri týždne.',
    date: '2025-10-20',
    img: '',
    pdf: 'https://cs.wikipedia.org/wiki/Portable_Document_Format',
    href: 'https://www.artforum.sk/katalog/160739/vertigo-1-22021-kniha-nespavost',
  },
  {
    media: '/assets/images/vertigo-obalka-4.png',
    title: 'Vertigo 1/2025',
    author: '',
    category: 'vertigo',
    label: '',
    date: '2025-09-20',
    img: '',
    pdf: 'https://cs.wikipedia.org/wiki/Portable_Document_Format',
    href: '',
  },
  {
    media: '/assets/images/vertigo-obalka-1.png',
    title: 'Vertigo 4/2025',
    author: '',
    category: 'vertigo',
    label: 'Tak pekne rozprávaš po slovensky ani prízvuk nemáš',
    date: '2025-12-20',
    img: '',
    pdf: 'https://cs.wikipedia.org/wiki/Portable_Document_Format',
    href: 'https://www.artforum.sk/katalog/181748/vertigo-22023-priloha-poldoba-rozpadu',
  },
  {
    media: '/assets/images/kniha-obalka-1.jpg',
    title: ' Spoločný jazyk',
    author: 'Jürg Halter',
    category: 'poézia',
    label:
      'Zahľadíš sa na strop, nadchnutý vlastným nešťastím, pomaly prerastáš sám seba.',
    date: '2025-12-10',
    img: '',
    pdf: '',
    href: 'https://www.artforum.sk/katalog/186108/slovnik-diel-slovenskej-literatury-po-roku-1989',
  },
  {
    media: '/assets/images/vertigo-obalka-2.png',
    title: 'Vertigo 3/2025',
    author: '',
    category: 'vertigo',
    label: '',
    date: '2025-11-20',
    img: '',
    pdf: '',
    href: 'https://www.artforum.sk/katalog/170542/vertigo-12022-kniha-rozkvitni-pre-seba',
  },
  {
    media: '/assets/images/vertigo-obalka-3.png',
    title: 'Vertigo 2/2025',
    author: '',
    category: 'vertigo',
    label: 'Do konca prázdnin ostávali ešte tri týždne.',
    date: '2025-10-20',
    img: '',
    pdf: 'https://cs.wikipedia.org/wiki/Portable_Document_Format',
    href: 'https://www.artforum.sk/katalog/160739/vertigo-1-22021-kniha-nespavost',
  },
];

const BooksPage = () => {
  const [page, setPage] = useState<number>(1);

  const handlePageChange: handlePageChange = (_e, value) => {
    setPage(value);
  };

  const PRODUCTS_TOTAL = MOCK_DATA.length;
  const totalPages = Math.ceil(PRODUCTS_TOTAL / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const items = MOCK_DATA.slice(start, end);

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
