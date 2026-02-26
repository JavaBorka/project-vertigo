import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';
import { BOOKS_DATA } from 'constants/booksData';
import ScrollableProductItems from 'components/ScrollableProductItems';
import { Main } from 'layouts';
import { Button, Card, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router';
import getMappedColor from 'utils/getMappedColor';

const AuthorDetailPage = () => {
  const navigate = useNavigate();

  return (
    <Main>
      <Container>
        <Typography
          color={getMappedColor()}
          sx={{
            pb: '1.5rem', // 24px
            fontSize: {
              xs: '1.3rem',
              sm: '1.5rem',
              md: '1.75rem',
            },
            textAlign: {
              xs: 'left',
              md: 'left',
            },
          }}
        >
          <strong>Jürg Halter |</strong> Švajčiarsko
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            alignItems: {
              xs: 'flex-start',
              md: 'center',
            },
            gap: 3,
            mb: 3,
          }}
        >
          <Card
            sx={{
              width: { xs: '80%', sm: '60%' },
              flex: { md: '0 0 35%', lg: '0 0 30%' },
            }}
          >
            <CardMedia
              className="card-image"
              component={'img'}
              title="title"
              image="/assets/images/author-jurg.jpg"
              sx={{
                borderRadius: { xs: 12, sm: 15, md: 15, lg: 19 },
              }}
            />
          </Card>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography>
              Básnik a performatívny umelec Jürg Halter (1980) patrí k
              najvýznamnejším predstaviteľom súčasnej švajčiarskej lyriky.
              Napísal dve básnické zbierky Bojíme sa konca hudby (Wir füchten
              das Ende der Musik, 2014) a Spoločný jazyk (Gemeinsame Sprache,
              2021), román Prebudenie v 21. storočí (Erwachen im 21. Jahhundert,
              2018) či divadelnú hru Bežec po mesačnej dráhe (Mondkreisläufer,
              2017). Úspešne sa etabloval ako rapový spevák pod menom Kutti MC.
            </Typography>
          </Box>
        </Box>
        <Box marginBottom={4} marginTop={4}>
          <Typography
            variant="h4"
            data-aos={'fade-up'}
            align={'center'}
            gutterBottom
            sx={{
              fontSize: {
                xs: '1.3rem',
                sm: '1.5rem',
                md: '1.75rem',
              },
              fontWeight: 700,
            }}
          >
            Vyšlo vo f.a.c.e
          </Typography>
        </Box>
        <ScrollableProductItems items={BOOKS_DATA} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            mt: 3,
            mb: 2,
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
