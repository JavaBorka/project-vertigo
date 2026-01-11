import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { AuthorCardItemProps } from 'types/authorsItem';

const AuthorCardItem = ({ item }: AuthorCardItemProps) => {
  return (
    <Box>
      <Box display={'block'} width={1}>
        <Card
          sx={{
            width: 1,
            display: 'flex',
            flexDirection: 'column',
            boxShadow: 'none',
            bgcolor: 'transparent',
            backgroundImage: 'none',
            transition: 'background-color 0.2s ease',
            '&:hover': {
              cursor: 'pointer',
            },
            '&:hover .author-text': {
              transition: 'color 200ms ease',
              color: 'primary.main',
            },
          }}
        >
          <CardMedia
            className="card-image"
            component={'img'}
            title={item.title}
            image={item.media}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: { xs: 12, sm: 15, md: 15, lg: 19 },
              transition: {
                xs: 'border-radius 450ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 650ms ease-in-out',
                sm: 'border-radius 450ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 650ms ease-in-out',
                md: 'border-radius 450ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 650ms ease-in-out',
                lg: 'border-radius 500ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 700ms ease-in-out',
              },
              //   backgroundColor: item.color,
              cursor: 'pointer',
              '&:hover': {
                borderRadius: { xs: 8, sm: 4, md: 10, lg: 14 },
                '& img': {
                  opacity: 1,
                  transform: 'scale(1.2)',
                },
              },
            }}
          />
          {/* Author and title */}
          <Box
            marginTop={1.5}
            marginBottom={0}
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
          >
            <Typography
              className="author-text"
              fontWeight={600}
              marginBottom={0.5}
              fontSize={16}
            >
              {item.author}
            </Typography>
            <Typography fontWeight={300} marginBottom={0.5}>
              {item.country}
            </Typography>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default AuthorCardItem;
