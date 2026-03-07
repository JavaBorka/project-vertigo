import Main from 'layouts/Main';
import ProductGrid from './components/ProductGrid';
import { Box, Typography } from '@mui/material';
import Container from 'components/Container';
import Pagination from 'components/Pagination';
import Skeleton from '@mui/material/Skeleton';
import Grid2 from '@mui/material/Grid2';
import { useEffect, useMemo, useState } from 'react';
import { ITEMS_PER_PAGE } from 'constants/paginationSettings';
import getMappedColor from 'utils/getMappedColor';
import { handlePageChange } from 'types/pagination';
import { CategoryId } from 'types/categoryID';
import { genreByCategoryId } from 'constants/categoryID';
import { ProductItem } from 'types/productItem';
import { getSafeTime } from 'utils/getSafeTime';
import { useBooks } from 'hooks/useBooks';

interface BooksPageProps {
  catId: CategoryId;
}

const BooksPage = ({ catId }: BooksPageProps) => {
  const { books, loading } = useBooks();
  const [page, setPage] = useState<number>(1);
  const [imagesReady, setImagesReady] = useState(false);

  const handlePageChange: handlePageChange = (_e, value) => {
    setPage(value);
  };

  const genre = genreByCategoryId[catId];

  const BOOKS_FILTERED = useMemo(() => {
    return books
      .filter((book: ProductItem) => book.genreID === catId)
      .sort(
        (a: ProductItem, b: ProductItem) =>
          getSafeTime(b.date) - getSafeTime(a.date),
      );
  }, [books, catId]);

  const BOOKS_TOTAL = BOOKS_FILTERED.length;
  const totalPages = Math.ceil(BOOKS_TOTAL / ITEMS_PER_PAGE);
  const showPagination = totalPages > 1;

  useEffect(() => {
    setPage(1);
  }, [catId]);

  // Prevent “empty pages” and out-of-range pagination state
  useEffect(() => {
    if (totalPages === 0 && page !== 1) {
      setPage(1);
      return;
    }
    if (totalPages > 0 && page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const items = BOOKS_FILTERED.slice(start, end);

  // Show skeletons until current page images load
  useEffect(() => {
    if (loading) {
      setImagesReady(false);
      return;
    }
    if (items.length === 0) {
      setImagesReady(true);
      return;
    }

    let cancelled = false;
    setImagesReady(false);

    Promise.all(
      items.map(
        (it) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => resolve();
            img.src = it.media;
          }),
      ),
    ).then(() => {
      if (!cancelled) setImagesReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, [items, loading]);

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
        {genre && (
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
            <strong>{genre}</strong>
          </Typography>
        )}
        {imagesReady ? (
          <ProductGrid items={items} />
        ) : (
          <Grid2 container spacing={4} alignItems="flex-end">
            {Array.from({
              length: Math.max(items.length, Math.min(ITEMS_PER_PAGE, 8)),
            }).map((_, idx) => (
              <Grid2 key={idx} size={{ xs: 12, sm: 6, md: 3 }}>
                <Skeleton
                  variant="rectangular"
                  height={260}
                  sx={{ borderRadius: 0 }}
                />
                <Skeleton sx={{ mt: 1.5 }} width="55%" />
                <Skeleton width="85%" />
                <Skeleton sx={{ mt: 1 }} width="45%" />
              </Grid2>
            ))}
          </Grid2>
        )}
        <Box
          sx={{
            mt: 3,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {showPagination && (
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
            />
          )}
        </Box>
      </Container>
    </Main>
  );
};

export default BooksPage;
