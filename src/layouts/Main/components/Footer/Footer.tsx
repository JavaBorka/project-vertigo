import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

const Footer = () => {
  return (
    <Container>
      <Box>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', md: 'row' }}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="theFront"
            width={80}
          >
            <Box
              sx={{
                marginTop: { xs: 2, md: 0 },
              }}
              component={'img'}
              src="/assets/svg/logo/logo-face-white.svg"
              height={1}
              width={1}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              paddingX: 5,
              paddingY: { xs: 2, sm: 2 },
            }}
          >
            <Typography
              align={'center'}
              color="primary.contrastText"
              variant="caption"
              fontWeight={300}
              sx={{
                fontSize: {
                  xs: '0.625rem', // 10px
                  md: '0.75rem', // 12px
                },
              }}
            >
              Publikácie sú podporené z verejných zdrojov Fondu na podporu
              umenia
            </Typography>
          </Box>
          <Box
            sx={{
              ml: { xs: 0 },
              alignSelf: { xs: 'center' },
              paddingBottom: {
                xs: 2,
                md: 0,
              },
              marginTop: {
                xs: 0,
                md: 2,
              },
            }}
          >
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
                src={'/assets/svg/logo/logo-fpu-white.svg'}
                sx={{ width: { xs: 120, sm: 120 } }}
              />
            </Link>
          </Box>
        </Box>
      </Box>
      <Typography
        align={'center'}
        color="primary.contrastText"
        gutterBottom
        fontSize={10}
      >
        f.a.c.e. {new Date().getFullYear()} &copy; All rights Reserved
      </Typography>
    </Container>
  );
};

export default Footer;
