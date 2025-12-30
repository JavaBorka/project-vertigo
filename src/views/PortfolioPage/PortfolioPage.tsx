import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Folio, Hero } from './components';
import { Contact } from 'views/HelpCenter/components';
import { useTheme } from '@mui/material/styles';
import { NewTitles } from './components';
import News from './components/News';

const PortfolioPage = () => {
  const theme = useTheme();
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
      <Box position={'relative'} bgcolor={'alternate.main'}>
        <Container sx={{ padding: '64px 20px 16px 16px !important' }}>
          <Contact />
        </Container>
        <Box
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
        </Box>
      </Box>
    </Main>
  );
};

export default PortfolioPage;
