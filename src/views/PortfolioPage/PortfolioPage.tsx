import React, { JSX } from 'react';
import Box from '@mui/material/Box';
import { WithPromoBadge } from 'blocks/productGrids';
import { Typography } from '@mui/material';

import Grid2 from '@mui/material/Grid2';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Features, Folio, Gallery, Hero, Services } from './components';
import { MostViewedArticles } from 'views/BlogNewsroom/components';

const PortfolioPage = (): JSX.Element => (
  <Main colorInvert={true}>
    <Hero />
    <Container sx={{paddingBottom: '24px !important' }}>
      <Folio />
    </Container>
    <Typography
      fontWeight={600}
      variant={'h4'}
      align={'center'}
      gutterBottom
      data-aos={'fade-up'}
    >
      Najnovšie sme vydali
    </Typography>
    <WithPromoBadge />
    <Box bgcolor={'alternate.main'}>
      <Container>
        {/* <Box marginBottom={4}>
          <Typography
            variant="h4"
            data-aos={'fade-up'}
            align={'center'}
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Zo života FACE
          </Typography>
          <Typography
            variant="h6"
            color={'text.secondary'}
            align={'center'}
            data-aos={'fade-up'}
          >
            Aktuality, udalosti a nové recenzie
          </Typography>
        </Box> */}
        <MostViewedArticles />
      </Container>
    </Box>
    <Box bgcolor={'alternate.main'}>
      <Container>
        <Services />
      </Container>
    </Box>
    <Box bgcolor={'primary.main'}>
      <Container>
        <Features />
      </Container>
    </Box>
    <Container>
      <Gallery />
    </Container>
  </Main>
);

export default PortfolioPage;
