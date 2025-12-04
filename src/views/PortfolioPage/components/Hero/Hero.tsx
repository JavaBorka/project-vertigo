import React, { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
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

  const theme = useTheme();

  return (
    <Box
      className={'jarallax'}
      data-jarallax
      data-speed="0.2"
      position={'relative'}
      minHeight={{ xs: 400, sm: 500, md: 560 }}
      display={'flex'}
      alignItems={'center'}
      marginTop={-13}
      paddingTop={13}
      id="agency__portfolio-item--js-scroll"
      sx={{
        overflow: 'hidden',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
      }}
    >
      <Box
        className={'jarallax-img'}
        sx={{
          position: 'absolute',
          objectFit: 'cover',
          /* support for plugin https://github.com/bfred-it/object-fit-images */
          fontFamily: 'object-fit: cover;',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundImage: 'url(/assets/images/hero-temp-banner-1200x675.jpg)',
          filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
        }}
      />
      <Container position={'relative'} zIndex={2}>
        <Box>
          <Box
            component={'img'}
            src={'/assets/svg/logo/logo-face-white.svg'}
            alt={'FACE'}
            sx={{
              display: 'block',
              height: { xs: 40, sm: 52, md: 30 },
              marginBottom: 3,
            }}
          />
          <Typography
            variant="h5"
            component="p"
            color="text.primary"
            sx={{
              fontFamily: 'Archia',
              fontWeight: 700,
              color: 'common.white',
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
