import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';
import { PRODUCTS_DATA } from 'constants/productsData';
import ScrollableProductItems from 'components/ScrollableProductItems';
import { Main } from 'layouts';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';

const AuthorDetailPage = () => {
  const navigate = useNavigate();

  return (
    <Main>
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
            Vyšlo vo f.a.c.e
          </Typography>
        </Box>
        <ScrollableProductItems items={PRODUCTS_DATA} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            mt: 3,
          }}
        >
          <Button
            onClick={() => navigate('/autori')}
            variant="contained"
            color="primary"
            size="large"
          >
            Späť na autorov
          </Button>
        </Box>
      </Container>
    </Main>
  );
};

export default AuthorDetailPage;
