import React, { useMemo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';
import { BOOKS_DATA } from 'constants/booksData';
import ScrollableProductItems from 'components/ScrollableProductItems';
import { Main } from 'layouts';
import { Button, Card, CardMedia } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import getMappedColor from 'utils/getMappedColor';
import { AuthorItem } from 'types/authorsItem';
import { getRemoteJson } from '../../remoteConfig';

const AuthorDetailPage = () => {
  const navigate = useNavigate();

  const { author } = useParams();
  const authorId = Number(author?.split('-')?.[0]);

  const AUTHORS_DATA = getRemoteJson('AUTHORS_JSON') as AuthorItem[];

  const item = useMemo<AuthorItem | null>(() => {
    return AUTHORS_DATA.find((a) => Number(a.id) === authorId);
  }, [AUTHORS_DATA, authorId]);

  if (!item) {
    return (
      <Main>
        <Container>
          <Typography color={getMappedColor()} sx={{ pb: '1.5rem' }}>
            <strong>Autor nenájdený</strong>
          </Typography>
          <Button
            onClick={() => navigate('/autori')}
            variant="contained"
            color="primary"
            size="large"
          >
            Späť na autorov
          </Button>
        </Container>
      </Main>
    );
  }

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
          <strong>{item.author} |</strong> {item.country}
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
            },
            gap: 3,
            mb: {
              xs: 3,
              md: 7,
            },
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
              image={item.media}
              sx={{
                borderRadius: { xs: 12, sm: 15, md: 15, lg: 19 },
              }}
            />
          </Card>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography>{item.label}</Typography>
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
