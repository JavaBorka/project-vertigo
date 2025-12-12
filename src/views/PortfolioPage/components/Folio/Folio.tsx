import React from 'react';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const mock = [
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
    title: 'Literárna veda',
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
  const navigate = useNavigate();
  return (
    <Box>
      <Grid2 container spacing={{ xs: 1.5, sm: 2 }}>
        {mock.map((item, i) => (
          <Grid2 key={i} size={{ xs: 6, sm: 6, md: 3 }}>
            <Box
              sx={{
                transformOrigin: 'center center',

                transform: {
                  xs: 'translateY(20px)',
                  sm: 'translateY(25px)',
                  md: 'translateY(35px)',
                  lg: 'translateY(35px)',
                },

                animation: {
                  xs: 'cardIn 320ms cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
                  sm: 'cardIn 320ms cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
                  md: 'cardIn 420ms cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
                  lg: 'cardIn 420ms cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
                },

                animationDelay: {
                  xs: `${i * 50}ms`,
                  sm: `${i * 50}ms`,
                  md: `${i * 90}ms`,
                  lg: `${i * 90}ms`,
                },

                '@keyframes cardIn': {
                  to: {
                    transform: 'translateY(0)',
                  },
                },

                '@media (prefers-reduced-motion: reduce)': {
                  animation: 'none',
                  transform: 'none',
                },
              }}
            >
              <Box
                onClick={() => navigate(item.path)}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: { xs: 12, sm: 15, md: 15, lg: 19 },
                  transition: {
                    xs: 'border-radius 450ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 650ms ease-in-out',
                    sm: 'border-radius 450ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 650ms ease-in-out',
                    md: 'border-radius 450ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 650ms ease-in-out',
                    lg: 'border-radius 500ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 700ms ease-in-out',
                  },
                  backgroundColor: item.color,
                  cursor: 'pointer',
                  '&:hover': {
                    borderRadius: { xs: 8, sm: 4, md: 10, lg: 14 },
                    '& img': {
                      opacity: 1,
                      transform: 'scale(1.2)',
                    },
                    '& .folio-title': {
                      opacity: 0,
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
                  sx={{
                    transition:
                      'transform .7s ease !important, opacity .3s ease !important',
                    transform: 'scale(1.0)',
                    opacity: 0,
                    objectFit: 'cover',
                  }}
                />
                <Box
                  position={'absolute'}
                  top={0}
                  bottom={0}
                  left={0}
                  right={0}
                  padding={3}
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  textAlign={'center'}
                >
                  <Typography
                    className={'folio-title'}
                    variant={'h4'}
                    fontWeight={700}
                    align="center"
                    sx={{
                      color: 'common.white',
                      fontSize: { xs: 18, sm: 20, md: 20, lg: 24 },
                      lineHeight: 1.3,
                      opacity: 1,
                      transition: 'opacity .25s ease-in-out',
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
