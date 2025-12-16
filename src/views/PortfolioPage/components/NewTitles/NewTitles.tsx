import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid2 from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import Container from 'components/Container';

const mock = [
  {
    media: '/assets/images/vertigo-obalka-1.png',
    title: 'Vertigo 4/2025',
    author: '',
    category: 'vertigo',
    label: '',
    date: '2025-12-20',
    img: '',
    pdf: 'https://idoklad.cz/',
    href: 'https://www.artforum.sk/katalog/181748/vertigo-22023-priloha-poldoba-rozpadu',
  },
  {
    media: '/assets/images/kniha-obalka-1.jpg',
    title: ' Slovník diel slovenskej literatúry po roku 1989',
    author: 'Marta Součková, Ján Gavura (eds.)',
    category: 'veda',
    label:
      'Zahľadíš sa na strop, nadchnutý vlastným nešťastím, pomaly prerastáš sám seba.',
    date: '2025-12-10',
    img: '',
    pdf: '',
    href: 'https://www.artforum.sk/katalog/186108/slovnik-diel-slovenskej-literatury-po-roku-1989',
  },
  {
    media: '/assets/images/vertigo-obalka-2.png',
    title: 'Vertigo 3/2025',
    author: '',
    category: 'vertigo',
    label: '',
    date: '2025-11-20',
    img: '',
    pdf: '',
    href: 'https://www.artforum.sk/katalog/170542/vertigo-12022-kniha-rozkvitni-pre-seba',
  },
  {
    media: '/assets/images/vertigo-obalka-3.png',
    title: 'Vertigo 2/2025',
    author: '',
    category: 'vertigo',
    label: '',
    date: '2025-10-20',
    img: '',
    pdf: '',
    href: 'https://www.artforum.sk/katalog/160739/vertigo-1-22021-kniha-nespavost',
  },
  {
    media: '/assets/images/vertigo-obalka-4.png',
    title: 'Vertigo 1/2025',
    author: '',
    category: 'vertigo',
    label: '',
    date: '2025-09-20',
    img: '',
    pdf: 'https://idoklad.cz/',
    href: '',
  },
];

const NewTitles = () => {
  return (
    // <Container sx={{paddingTop: '18px !important' }}>
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
        {/* <Typography
          variant="h6"
          color={'text.secondary'}
          align={'center'}
          data-aos={'fade-up'}
        >
          Najnovšie tituly
        </Typography> */}
      </Box>
      <Grid2 container spacing={7} alignItems="flex-start">
        {mock.map((item, i) => (
          <Grid2 key={i} size={{ xs: 12, sm: 6, md: 3 }}>
            <Box
              display={'block'}
              width={1}
              sx={{
                ...(item.href && {
                  '&:hover .buy-button': {
                    backgroundColor: 'transparent',
                    fontWeight: 600,
                  },
                  '&:hover .buy-button::after': {
                    transform: 'translateX(-50%) scaleX(1)',
                  },
                }),
                ...(!item.href &&
                  item.pdf && {
                    '&:hover .pdf-button': {
                      backgroundColor: 'transparent',
                      fontWeight: 600,
                    },
                    '&:hover .pdf-button::after': {
                      transform: 'translateX(-50%) scaleX(1)',
                    },
                  }),
              }}
            >
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
                    cursor: 'pointer',
                  },
                }}
              >
                <Box>
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
                {/* Author and title */}
                <Box marginTop={1.5} marginBottom={0}>
                  <Typography fontWeight={300} marginBottom={0.5} fontSize={16}>
                    {item.author}
                  </Typography>
                  <Typography fontWeight={600} marginBottom={0.5}>
                    {item.category === 'vertigo'
                      ? item.title.toUpperCase()
                      : item.title}
                  </Typography>
                </Box>
                <Box
                  display={'flex'}
                  justifyContent={item.href ? 'space-between' : 'flex-start'}
                  sx={{
                    // If PDF button is hovered, do NOT animate the buy button
                    '&:has(.pdf-button:hover) .buy-button': {
                      fontWeight: 400,
                    },
                    '&:has(.pdf-button:hover) .buy-button::after': {
                      transform: 'translateX(-50%) scaleX(0)',
                    },
                  }}
                >
                  {item.href && (
                    <Button
                      className="buy-button"
                      onClick={() =>
                        window.open(item.href, '_blank', 'noopener,noreferrer')
                      }
                      sx={{
                        position: 'relative',
                        paddingLeft: 0,
                        fontWeight: 400,
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          left: '50%',
                          bottom: 0, // keep inside the button
                          height: 2,
                          width: '50%',
                          backgroundColor: 'currentColor',
                          transform: 'translateX(-50%) scaleX(0)',
                          transformOrigin: 'center',
                          transition: 'transform 350ms ease',
                          zIndex: 1,
                        },
                        '&:hover': {
                          backgroundColor: 'transparent',
                          fontWeight: 600,
                        },
                        '&:hover::after': {
                          transform: 'translateX(-50%) scaleX(1)',
                        },
                      }}
                    >
                      Kúpiť v Artfore
                    </Button>
                  )}
                  {item.pdf && (
                    <Button
                      onClick={() =>
                        window.open(item.pdf, '_blank', 'noopener,noreferrer')
                      }
                      className="pdf-button"
                      sx={{
                        position: 'relative',
                        paddingLeft: 0,
                        fontWeight: 400,
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          left: '50%',
                          bottom: 0, // keep inside the button
                          height: 2,
                          width: '50%',
                          backgroundColor: 'currentColor',
                          transform: 'translateX(-50%) scaleX(0)',
                          transformOrigin: 'center',
                          transition: 'transform 350ms ease',
                          zIndex: 1,
                        },
                        '&:hover': {
                          backgroundColor: 'transparent',
                          fontWeight: 600,
                        },
                        '&:hover::after': {
                          transform: 'translateX(-50%) scaleX(1)',
                        },
                      }}
                    >
                      Prelistovať PDF
                    </Button>
                  )}
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
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default NewTitles;
