import React, { JSX } from 'react';
import Box from '@mui/material/Box';
import { WithPromoBadge } from 'blocks/productGrids';
import { Typography } from '@mui/material';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Features, Folio, Gallery, Hero, Services } from './components';

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
