import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';

const Hero = () => {
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  });

  return (
    <Box
      className={'jarallax'}
      data-jarallax
      data-speed="0.2"
      position={'relative'}
      minHeight={{ xs: 320, sm: 380, md: 500, lg: 520 }}
      display={'flex'}
      alignItems={'center'}
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
          zIndex: -1,
          '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          },
        }}
      >
        <picture>
          <source
            media="(min-width:1200px)"
            srcSet="/assets/images/hero-banner-lg.jpg"
          />
          <source
            media="(min-width:900px)"
            srcSet="/assets/images/hero-banner-md.jpg"
          />
          <source
            media="(min-width:600px)"
            srcSet="/assets/images/hero-banner-sm.jpg"
          />
          <img src="/assets/images/hero-banner-xs.jpg" alt="" />
        </picture>
      </Box>
      <Container position={'relative'} zIndex={2}>
        <Box>
          <Box
            component={'img'}
            src={'/assets/svg/logo/logo-face-white.svg'}
            alt={'FACE'}
            sx={{
              display: 'block',
              height: { xs: 20, sm: 30, md: 30, lg: 35 },
              marginBottom: 3,
            }}
          />
          {/* <Typography
            variant="h5"
            component="p"
            color="text.primary"
            sx={{
              fontFamily: 'Archia',
              fontWeight: 700,
              fontSize: { xs: 18, md: 20, lg: 25 },
              color: 'common.white',
            }}
          >
            fórum alternatívnej
            <br />
            kultúry a vzdelávania
          </Typography> */}
          <Typography
            variant="h5"
            component="p"
            sx={{
              fontFamily: 'Archia',
              fontWeight: 700,
              fontSize: { xs: 18, sm: 20, md: 20, lg: 25 },
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
            fórum alternatívnej
            <br />
            kultúry a vzdelávania
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
