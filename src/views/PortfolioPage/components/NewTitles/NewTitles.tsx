import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';
import ScrollableProductItems from 'components/ScrollableProductItems';
import { BOOKS_DATA } from 'constants/booksData';

const NewTitles = () => {
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
      <ScrollableProductItems items={BOOKS_DATA} />
    </Container>
  );
};

export default NewTitles;
