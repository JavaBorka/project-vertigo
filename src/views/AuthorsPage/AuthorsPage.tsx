import Main from 'layouts/Main';
import { Box, Typography } from '@mui/material';
import Container from 'components/Container';
import Pagination from 'components/Pagination';
import Skeleton from '@mui/material/Skeleton';
import Grid2 from '@mui/material/Grid2';
import { useEffect, useMemo, useState } from 'react';
import { ITEMS_PER_PAGE } from 'constants/paginationSettings';
import getMappedColor from 'utils/getMappedColor';
import { handlePageChange } from 'types/pagination';
import AuthorGrid from './components/ProductGrid/AuthorGrid';
import { getRemoteJson } from '../../remoteConfig';
import type { AuthorItem } from 'types/authorsItem';
// import { AUTHORS_DATA } from 'constants/authorsData';

const AuthorsPage = () => {
  const [page, setPage] = useState<number>(1);
  const [imagesReady, setImagesReady] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [page]);

  const handlePageChange: handlePageChange = (_e, value) => {
    setPage(value);
  };

  const AUTHORS_DATA = useMemo(() => {
    return getRemoteJson('AUTHORS_JSON') as AuthorItem[];
  }, []);

  const PRODUCTS_TOTAL = AUTHORS_DATA.length;
  const totalPages = Math.ceil(PRODUCTS_TOTAL / ITEMS_PER_PAGE);

  const items = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return AUTHORS_DATA.slice(start, end);
  }, [AUTHORS_DATA, page]);

  // Show skeletons until current page images load (similar to BooksPage)
  useEffect(() => {
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
            const src = it.media;
            if (!src) {
              resolve();
              return;
            }
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => resolve();
            img.src = src;
          }),
      ),
    ).then(() => {
      if (!cancelled) setImagesReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, [items]);

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
          <strong>Autori</strong>
        </Typography>
        {imagesReady ? (
          <AuthorGrid items={items} />
        ) : (
          <Grid2 container spacing={4} alignItems="stretch">
            {Array.from({ length: Math.max(items.length, ITEMS_PER_PAGE) }).map(
              (_, idx) => (
                <Grid2
                  key={idx}
                  size={{ xs: 12, sm: 6, md: 3 }}
                  sx={{ display: 'flex', flexDirection: 'column' }}
                >
                  <Skeleton
                    variant="rectangular"
                    sx={{
                      width: 1,
                      height: 'auto',
                      display: 'block',
                      // Author photos render closer to square in the real grid
                      aspectRatio: '1 / 1',
                      borderRadius: { xs: 12, sm: 15, md: 15, lg: 19 },
                    }}
                  />
                  <Box
                    mt={1.5}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Skeleton width="55%" height={24} />
                    <Skeleton width="40%" height={20} />
                  </Box>
                </Grid2>
              ),
            )}
          </Grid2>
        )}
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

export default AuthorsPage;
