import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';

const Hero = () => {
  useEffect(() => {
    const jarallaxInit = async () => {
      // Enable it only on md screens where there's enough space for the effect.
      if (!window.matchMedia('(min-width:900px)').matches) return;
      if (window.matchMedia('(min-width:1200px)').matches) return;

      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  }, []);

  return (
    <Box
      className={'jarallax'}
      data-jarallax
      data-speed="0.2"
      position={'relative'}
      minHeight={{
        xs: 'clamp(270px, 56.25vw, 380px)',
        sm: 'clamp(330px, 56.25vw, 460px)',
        md: 'clamp(320px, 56.25vw, 520px)',
        lg: 'clamp(520px, 56.25vw, 675px)',
      }}
      display={'flex'}
      alignItems={'stretch'}
      marginTop={-13}
      paddingTop={13}
      id="agency__portfolio-item--js-scroll"
      sx={{
        overflow: 'hidden',
        borderBottomLeftRadius: { xs: 0, sm: 20, md: 50 },
        borderBottomRightRadius: { xs: 0, sm: 20, md: 50 },
      }}
    >
      <Box
        className={'jarallax-img'}
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          },
        }}
      >
        <picture>
          <img src="/assets/images/hero-banner-1200-675.jpg" alt="" />
        </picture>
      </Box>
      <Container
        position={'relative'}
        zIndex={1}
        marginTop={{ xs: 0 }}
        marginBottom={{ xs: 0 }}
        paddingTop={{ xs: 1.5 }}
        paddingBottom={{ xs: 1.5 }}
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <Typography
          variant={'caption'}
          component="p"
          sx={{
            m: 0,
            fontSize: { xs: 15, sm: 18, md: 20, lg: 22 },
            fontWeight: 500,
            color: 'common.white',
            opacity: 0,
            transform: 'translateY(8px)',
            animation:
              'heroTextIn 650ms cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
            animationDelay: '240ms',
            '@keyframes heroTextIn': {
              to: {
                opacity: 1,
                transform: 'translateY(0)',
              },
            },
            '@media (prefers-reduced-motion: reduce)': {
              animation: 'none',
              opacity: 1,
              transform: 'none',
            },
          }}
        >
          fórum alternatívnej kultúry a vzdelávania
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;
