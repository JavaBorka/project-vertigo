import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';
import { PRODUCTS_DATA } from 'constants/productsData';
import ScrollableProductItems from 'components/ScrollableProductItems';

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
      <ScrollableProductItems items={PRODUCTS_DATA} />
    </Container>
  );
};

export default NewTitles;
