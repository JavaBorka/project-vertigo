import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid2 from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { alpha, useTheme } from '@mui/material/styles';

import Container from 'components/Container';

const mock = [
  {
    media: '/assets/images/vertigo-obalka-1.png',
    title: 'VERTIGO 4/2025',
    description:
      'Výber z básnickej tvorby populárneho chorvátskeho spisovateľa.',
    price: '$69.90',
    href: '#',
    reviewScore: 5,
    reviewCount: 12,
    isNew: true,
  },
  {
    media: '/assets/images/vertigo-obalka-2.png',
    title: 'VERTIGO 3/2025',
    description:
      'Výber z básnickej tvorby populárneho chorvátskeho spisovateľa.',
    price: '$39.90',
    oldPrice: '$60.00',
    reviewScore: 4,
    reviewCount: 6,
    isNew: true,
  },
  {
    media: '/assets/images/vertigo-obalka-3.png',
    title: 'VERTIGO 2/2025',
    description:
      'Výber z básnickej tvorby populárneho chorvátskeho spisovateľa.',
    price: '$49.90',
    oldPrice: '$70.00',
    href: '#',
    reviewScore: 5,
    reviewCount: 8,
    isNew: true,
  },
  {
    media: '/assets/images/vertigo-obalka-4.png',
    title: 'VERTIGO 1/2025',
    description:
      'Výber z básnickej tvorby populárneho chorvátskeho spisovateľa.',
    price: '$59.90',
    reviewScore: 4,
    reviewCount: 10,
    isNew: true,
  },
  {
    media: '/assets/images/vertigo-obalka-1.png',
    title: 'VERTIGO 4/2025',
    description:
      'Výber z básnickej tvorby populárneho chorvátskeho spisovateľa.',
    price: '$69.90',
    href: '#',
    reviewScore: 5,
    reviewCount: 12,
    isNew: true,
  },
  {
    media: '/assets/images/vertigo-obalka-2.png',
    title: 'VERTIGO 3/2025',
    description:
      'Výber z básnickej tvorby populárneho chorvátskeho spisovateľa.',
    price: '$39.90',
    oldPrice: '$60.00',
    reviewScore: 4,
    reviewCount: 6,
    isNew: true,
  },
  {
    media: '/assets/images/vertigo-obalka-3.png',
    title: 'VERTIGO 2/2025',
    description:
      'Výber z básnickej tvorby populárneho chorvátskeho spisovateľa.',
    price: '$49.90',
    oldPrice: '$70.00',
    href: '#',
    reviewScore: 5,
    reviewCount: 8,
    isNew: true,
  },
  {
    media: '/assets/images/vertigo-obalka-4.png',
    title: 'VERTIGO 1/2025',
    description:
      'Výber z básnickej tvorby populárneho chorvátskeho spisovateľa.',
    price: '$59.90',
    reviewScore: 4,
    reviewCount: 10,
    isNew: true,
  },
];

const ProductGrid = () => {
  const theme = useTheme();

  return (
    <Container sx={{ paddingTop: '1px !important' }}>
      <Grid2 container spacing={4} alignItems="flex-start">
        {mock.map((item, i) => (
          <Grid2 key={i} size={{ xs: 12, sm: 4, md: 3 }}>
            <Box display={'block'} width={1}>
              <Card
                sx={{
                  width: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 'none',
                  bgcolor: 'transparent',
                  backgroundImage: 'none',
                  transition: 'background-color 0.2s ease',
                  '&:hover': {
                    bgcolor: theme.palette.action.hover,
                    cursor: 'pointer',
                  },
                }}
              >
                <Box padding={2}>
                  <CardMedia
                    component={'img'}
                    title={item.title}
                    image={item.media}
                    sx={{
                      width: '1',
                      height: 'auto',
                      display: 'block',
                      borderRadius: 0,
                    }}
                  />
                </Box>
                <Box marginTop={1} marginBottom={2} paddingLeft={2}>
                  <Typography fontWeight={700}>{item.title}</Typography>
                  <Typography variant={'caption'} color={'text.secondary'}>
                    {item.description}
                  </Typography>
                </Box>
                {/* <Box marginTop={2} display={'flex'} alignItems={'center'}>
                  {item.oldPrice && (
                    <Typography
                      marginRight={0.5}
                      color={'text.secondary'}
                      sx={{ textDecoration: 'line-through' }}
                    >
                      {item.oldPrice}
                    </Typography>
                  )}
                  <Typography
                    fontWeight={700}
                    color={item.oldPrice ? 'error.light' : 'text.primary'}
                  >
                    {item.price}
                  </Typography>
                </Box> */}
              </Card>
              <Box display={'flex'} justifyContent={'flex-end'} paddingX={2}>
                <Button
                  endIcon={
                    <Box
                      component={'svg'}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={24}
                      height={24}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </Box>
                  }
                >
                  Kúpiť v Artfóre
                </Button>
              </Box>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default ProductGrid;
