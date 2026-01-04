import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Folio,
  Hero,
  NewTitles,
  News,
  Contact,
} from 'views/PortfolioPage/components';

const PortfolioPage = () => {
  return (
    <Main colorInvert={true}>
      <Hero />
      <Container>
        <Folio />
      </Container>
      {/* <Typography
        fontWeight={600}
        variant={'h4'}
        align={'center'}
        gutterBottom
        data-aos={'fade-up'}
      >
        Najnovšie sme vydali
      </Typography> */}
      <Box>
        <NewTitles />
      </Box>
      <Box>
        <Container>
          <News />
        </Container>
      </Box>
      <Box>
        <Container>
          <Contact />
        </Container>
      </Box>
    </Main>
  );
};

export default PortfolioPage;
