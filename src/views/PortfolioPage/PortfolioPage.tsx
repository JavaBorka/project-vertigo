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
      <Box component="section" sx={{ py: { xs: 4, md: 6 } }}>
        <Container marginTop={0} marginBottom={0} paddingY={{ xs: 0, md: 0 }}>
          <Folio />
        </Container>
      </Box>
      <Box component="section" sx={{ py: { xs: 7 } }}>
        <NewTitles />
      </Box>
      <Box component="section">
        <Container marginTop={0} marginBottom={0} paddingY={{ xs: 0, md: 0 }}>
          <News />
        </Container>
      </Box>
      <Box component="section" sx={{ py: { xs: 4, md: 6 } }}>
        <Container marginTop={0} marginBottom={0} paddingY={{ xs: 0, md: 0 }}>
          <Contact />
        </Container>
      </Box>
    </Main>
  );
};

export default PortfolioPage;
