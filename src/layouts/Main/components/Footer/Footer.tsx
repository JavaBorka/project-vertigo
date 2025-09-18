import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = (): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="theFront"
            width={80}
          >
            <Box
              component={'img'}
              src={
                mode === 'light'
                  ? '/assets/svg/logo/logo-temp-black.svg'
                  : '/assets/svg/logo/logo-temp-white.svg'
              }
              height={1}
              width={1}
            />
          </Box>
          <Box sx={{ 
            flex: 1,
            display: 'flex',
            justifyContent:'center',
            paddingX: 5,
            paddingY: 3
          }}
          >
            <Typography
              align={'center'}
              variant={'subtitle2'}
              color="text.secondary"
            >
              Publikácie sú podporené z verejných zdrojov Fondu na podporu umenia
            </Typography>
          </Box>  
          <Box sx={{ 
              ml: { xs: 0, sm: 'auto' }, 
              alignSelf: { xs: 'center', sm: 'center' },
              paddingBottom: {
                xs: 3,
                sm: 0
              } 
            }}>
            <Link
              href="https://fpu.sk/"
              target="_blank"
              rel="noopener"
              underline="none"
              sx={{ display: 'inline-flex', alignItems: 'center' }}
              aria-label="Fond na podporu umenia"
            >
              <Box 
                component={'img'}
                src={'/assets/svg/logo/logo-fpu.svg'}
                sx={{ width: { xs: 110, sm: 120 } }}
              />
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} paddingTop={'0px !important'}>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Link
            href="https://www.facebook.com/people/FACE-vydavate%C4%BEstvo/100063588426653/"
            aria-label="Facebook"
            underline="none"
            sx={{ display: 'inline-flex', color: 'text.primary', mx: 1 }}
          >
            <FacebookIcon />
          </Link>
          <Link
            href="https://www.instagram.com/face_vydavatelstvo/"
            aria-label="Instagram"
            underline="none"
            sx={{ display: 'inline-flex', color: 'text.primary', mx: 1 }}
          >
            <InstagramIcon />
          </Link>
        </Box>
      </Grid>
      <Grid item xs={12} paddingTop={'15px !important'}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          f.a.c.e. {new Date().getFullYear()} &copy; All rights Reserved
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
