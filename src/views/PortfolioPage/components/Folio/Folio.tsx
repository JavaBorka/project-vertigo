import React from 'react';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';

const CATEGORIES = [
  {
    image: '/assets/images/grid-poetry.jpg',
    title: 'Poézia',
    color: '#582864',
    path: '/poezia',
  },
  {
    image: '/assets/images/grid-prose.jpg',
    title: 'Próza',
    color: '#006A64',
    path: '/proza',
  },
  {
    image: '/assets/images/grid-science.jpg',
    title: 'Veda',
    color: '#6D3628',
    path: '/veda',
  },
  {
    image: '/assets/images/grid-kids.jpg',
    title: 'Deti',
    color: '#960048',
    path: '/deti',
  },
];

const Folio = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const navigate = useNavigate();
  return (
    <Box>
      <Grid2 container spacing={{ xs: 1.5, sm: 2 }}>
        {CATEGORIES.map((item, i) => (
          <Grid2 key={i} size={{ xs: 6, sm: 6, md: 3 }}>
            <Box
              data-aos={isMdUp ? 'folio' : undefined}
              data-aos-delay={isMdUp ? i * 80 : undefined}
              data-aos-duration={isMdUp ? 520 : undefined}
              sx={{
                transformOrigin: 'center center',
              }}
            >
              <Box
                onClick={() => navigate(item.path)}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: { xs: 8, sm: 10, md: 15, lg: 19 },
                  transition: {
                    xs: 'border-radius 450ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 650ms ease-in-out',
                    sm: 'border-radius 450ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 650ms ease-in-out',
                    md: 'border-radius 450ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 650ms ease-in-out',
                    lg: 'border-radius 500ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 700ms ease-in-out',
                  },
                  backgroundColor: item.color,
                  cursor: 'pointer',
                  '@media (hover: hover) and (pointer: fine)': {
                    '&:hover': {
                      borderRadius: { xs: 6, sm: 6, md: 8, lg: 8 },
                      '& .folio-title': {
                        opacity: 0,
                      },
                      '& .folio-titlebar': {
                        transform: 'translateY(100%)',
                      },
                    },
                  },
                }}
              >
                <Box
                  component={'img'}
                  loading="lazy"
                  src={item.image}
                  alt="..."
                  sx={{
                    transition:
                      'transform .7s ease !important, opacity .25s ease !important',
                    transform: 'none',
                    opacity: 1,
                    objectFit: 'cover',
                    width: 1,
                    height: 'auto',
                    display: 'block',
                  }}
                />
                <Box
                  position={'absolute'}
                  left={0}
                  right={0}
                  bottom={0}
                  paddingY={{ xs: 1, sm: 1.5, md: 1.75 }}
                  paddingX={{ xs: 2, sm: 2.25, md: 2.5 }}
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  textAlign={'center'}
                  className="folio-titlebar"
                  sx={{
                    backgroundColor: item.color,
                    willChange: 'transform',
                    transition:
                      'transform 700ms cubic-bezier(0.22, 1, 0.36, 1) 220ms, filter 300ms ease',
                    filter: 'saturate(1.02)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(to bottom, rgba(255,255,255,0.14), rgba(255,255,255,0))',
                      pointerEvents: 'none',
                    },
                  }}
                >
                  <Typography
                    className={'folio-title'}
                    variant={'h6'}
                    fontWeight={700}
                    align="center"
                    sx={{
                      color: 'common.white',
                      fontSize: { xs: 16, sm: 18, md: 18, lg: 20 },
                      lineHeight: 1.3,
                      opacity: 1,
                      transition: 'opacity 260ms ease',
                      textShadow: '0 1px 10px rgba(0,0,0,0.28)',
                      position: 'relative',
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Folio;
