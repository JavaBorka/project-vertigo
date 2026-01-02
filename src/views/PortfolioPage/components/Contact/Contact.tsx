import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
  return (
    <Box>
      <Box>
        <Typography
          variant={'h4'}
          sx={{ fontWeight: 700 }}
          gutterBottom
          align={'center'}
          data-aos={'fade-up'}
          marginBottom={2}
        >
          Spojme sa
        </Typography>
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          marginBottom={2}
        >
          <Link
            href="https://www.facebook.com/people/FACE-vydavate%C4%BEstvo/100063588426653/"
            aria-label="Facebook"
            underline="none"
            sx={{ display: 'inline-flex', color: 'text.primary', mx: 1 }}
          >
            <FacebookIcon
              sx={{
                fontSize: {
                  xs: 28,
                  md: 30,
                  lg: 32,
                },
              }}
            />
          </Link>
          <Link
            href="https://www.instagram.com/face_vydavatelstvo/"
            aria-label="Instagram"
            underline="none"
            sx={{ display: 'inline-flex', color: 'text.primary', mx: 1 }}
          >
            <InstagramIcon
              sx={{
                fontSize: {
                  xs: 28,
                  md: 30,
                  lg: 32,
                },
              }}
            />
          </Link>
        </Box>
        <Typography color="text.secondary" align={'center'} marginBottom={3}>
          Chcete o f.a.c.e vedieť viac? Máte záujem predplatiť si Vertigo?
          <br />
          Chceli by ste s nami spolupracovať?
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            component="a"
            href="mailto:vertigoforum@gmail.com"
          >
            Napíšte nám
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
