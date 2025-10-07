import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const mock = [
  {
    image: '/assets/images/grid-1-1920x1404.jpg',
    description: 'Autorské monografie z oblasti literárnej vedy',
    title: 'Literárna veda',
    // color: '#183167',
  },
  {
    image: '/assets/images/grid-2-1920x1404.jpg',
    description: 'Básnické zbierky zo svetovej literatúry',
    title: 'Poézia',
    // color: '#CE371F',
  },
  {
    image: '/assets/images/grid-3-1920x1404.jpg',
    description: 'Preklady súčasnej svetovej prózy',
    title: 'Próza',
    // color: '#ECB3BE',
  },
  {
    image: '/assets/images/grid-4-1920x1404.jpg',
    description: 'Literatúra pre deti a mládež',
    title: 'Deti',
    // color: '#000000',
  },
];

const Folio = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box>
      <Grid2 container spacing={2}>
        {mock.map((item, i) => (
          <Grid2 key={i} size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 2,
                '&:hover': {
                  '& img': {
                    transform: 'scale(1.2)',
                  },
                },
              }}
            >
              <Box
                component={'img'}
                loading="lazy"
                height={1}
                width={1}
                src={item.image}
                alt="..."
                minHeight={{ xs: 400, md: 80 }}
                sx={{
                  transition: 'transform .7s ease !important',
                  transform: 'scale(1.0)',
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                }}
              />
              <Box
                position={'absolute'}
                bottom={0}
                left={0}
                right={0}
                padding={3}
                sx={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, ${item.color})`,
                }}
              >
                <Typography
                  variant={'h4'}
                  fontWeight={700}
                  sx={{ color: 'common.white' }}
                >
                  {item.title}
                </Typography>
                {/* <Typography
                  variant={'h6'}
                  fontWeight={700}
                  sx={{ color: 'common.white' }}
                  gutterBottom
                >
                  {item.description}
                </Typography>
                <Button
                  size={'large'}
                  variant={'contained'}
                  color={'secondary'}
                >
                  Preskúmať
                </Button> */}
              </Box>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Folio;
