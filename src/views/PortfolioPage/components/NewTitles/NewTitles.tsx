import React, { useMemo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';
import ScrollableProductItems from 'components/ScrollableProductItems';
import { useBooks } from 'hooks/useBooks';
import { ProductItem } from 'types/productItem';
import { getSafeTime } from 'utils/getSafeTime';

const NewTitles = () => {
  const { books } = useBooks();

  const newestBooks = useMemo(() => {
    return [...books]
      .sort(
        (a: ProductItem, b: ProductItem) =>
          getSafeTime(b.date) - getSafeTime(a.date),
      )
      .slice(0, 6);
  }, [books]);

  return (
    <Container>
      <Box marginBottom={4} marginTop={4}>
        <Typography
          variant="h4"
          data-aos={'fade-up'}
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Najnovšie tituly
        </Typography>
      </Box>
      <ScrollableProductItems items={newestBooks} />
    </Container>
  );
};

export default NewTitles;
