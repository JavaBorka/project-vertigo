import React, { JSX } from 'react';
import Box from '@mui/material/Box';
import { WithPromoBadge } from 'blocks/productGrids';
import { Typography } from '@mui/material';

import Grid2 from '@mui/material/Grid2';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Features, Folio, Gallery, Hero, Services } from './components';
import { MostViewedArticles } from 'views/BlogNewsroom/components';
import { Contact } from 'views/HelpCenter/components';
import { useTheme } from '@mui/material/styles';

const PortfolioPage = (): JSX.Element => {
  const theme = useTheme();
  return (
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
          <MostViewedArticles />
        </Container>
      </Box>
      <Box
        position={'relative'}
        // sx={{
        //   backgroundColor: theme.palette.alternate.main,
        // }}
      >
        <Container>
          <Contact />
        </Container>
        {/* <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            width: '100%',
            marginBottom: theme.spacing(-1),
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box> */}
      </Box>
    </Main>
  );
};

export default PortfolioPage;
