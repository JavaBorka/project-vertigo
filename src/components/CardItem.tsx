import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export type Product = {
  media: string;
  title: string;
  author: string;
  category: string;
  label?: string;
  date: string;
  img: string;
  href?: string;
  pdf?: string;
};

type ProductItemProps = {
  item: Product;
};

const CardItem = ({ item }: ProductItemProps) => {
  const handleCardClick = () => {
    if (item.href) {
      window.open(item.href, '_blank', 'noopener,noreferrer');
    } else if (!item.href && item.pdf) {
      window.open(item.pdf, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Box>
      <Box
        display={'block'}
        width={0.8}
        // mx="auto"
        sx={{
          width: {
            xs: 0.8,
            sm: 1,
          },
          ...(item.href && {
            '&:hover .buy-button': {
              backgroundColor: 'transparent',
              fontWeight: 600,
            },
            '&:hover .buy-button::after': {
              transform: 'translateX(-50%) scaleX(1)',
            },
          }),

          ...(!item.href &&
            item.pdf && {
              '&:hover .pdf-button': {
                backgroundColor: 'transparent',
                fontWeight: 600,
              },
              '&:hover .pdf-button::after': {
                transform: 'translateX(-50%) scaleX(1)',
              },
            }),
        }}
      >
        <Card
          onClick={handleCardClick}
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
            ...(item.label
              ? {
                  '&:hover .card-image': {
                    opacity: 0.13,
                  },
                  '&:hover .card-label': {
                    opacity: 1,
                    bgcolor: 'rgba(150, 0, 72, 0.05)',
                  },
                }
              : {
                  '&:hover .card-image': {
                    opacity: 0.75,
                  },
                  '&:hover .image-wrapper': {
                    backgroundColor: 'rgba(150, 0, 72, 0.2)',
                  },
                }),
          }}
        >
          <Box className="image-wrapper" sx={{ position: 'relative' }}>
            <CardMedia
              className="card-image"
              component={'img'}
              title={item.title}
              image={item.media}
              sx={{
                width: '1',
                height: 'auto',
                display: 'block',
                borderRadius: 0,
                transition: 'opacity .25s ease',
                opacity: 1,
              }}
            />
            {item.label && (
              <Box
                className="card-label"
                position={'absolute'}
                top={0}
                bottom={0}
                left={0}
                right={0}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                textAlign={'center'}
                sx={{
                  color: 'common.black',
                  opacity: 0,
                  transition: 'opacity .25s ease',
                  px: 3,
                }}
              >
                <Typography
                  fontWeight={400}
                  fontSize={16}
                  sx={{
                    display: 'inline-block',
                    lineHeight: 1.5,
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    textAlign: 'center',
                    '&::before': {
                      content: '"„"',
                      color: 'primary.main',
                      fontWeight: 700,
                      fontSize: { xs: 20, sm: 22, md: 24 },
                      marginRight: 0.6,
                      fontFamily: 'Georgia, "Times New Roman", Times, serif',
                      fontStyle: 'italic',
                    },
                    '&::after': {
                      content: '"“"',
                      color: 'primary.main',
                      fontWeight: 700,
                      fontSize: { xs: 20, sm: 22, md: 24 },
                      marginLeft: 0.6,
                      fontFamily: 'Georgia, "Times New Roman", Times, serif',
                    },
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            )}
          </Box>
          {/* Author and title */}
          <Box marginTop={1.5} marginBottom={0}>
            <Typography fontWeight={300} marginBottom={0.5} fontSize={16}>
              {item.author}
            </Typography>
            <Typography fontWeight={600} marginBottom={0.5}>
              {item.category === 'vertigo'
                ? item.title.toUpperCase()
                : item.title}
            </Typography>
          </Box>
          <Box
            display={'flex'}
            justifyContent={item.href ? 'space-between' : 'flex-start'}
            sx={{
              // If PDF button is hovered, do NOT animate the buy button
              '&:has(.pdf-button:hover) .buy-button': {
                fontWeight: 400,
              },
              '&:has(.pdf-button:hover) .buy-button::after': {
                transform: 'translateX(-50%) scaleX(0)',
              },
            }}
          >
            {item.href && (
              <Button
                className="buy-button"
                onClick={() =>
                  window.open(item.href, '_blank', 'noopener,noreferrer')
                }
                sx={{
                  position: 'relative',
                  paddingLeft: 0,
                  fontWeight: 400,
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: '50%',
                    bottom: 0, // keep inside the button
                    height: 2,
                    width: '50%',
                    backgroundColor: 'currentColor',
                    transform: 'translateX(-50%) scaleX(0)',
                    transformOrigin: 'center',
                    transition: 'transform 350ms ease',
                    zIndex: 1,
                  },
                  '&:hover': {
                    backgroundColor: 'transparent',
                    fontWeight: 600,
                  },
                  '&:hover::after': {
                    transform: 'translateX(-50%) scaleX(1)',
                  },
                }}
              >
                Kúpiť v Artfore
              </Button>
            )}
            {item.pdf && (
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(item.pdf, '_blank', 'noopener,noreferrer');
                }}
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                className="pdf-button"
                sx={{
                  position: 'relative',
                  paddingLeft: 0,
                  fontWeight: 400,
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: '50%',
                    bottom: 0, // keep inside the button
                    height: 2,
                    width: '50%',
                    backgroundColor: 'currentColor',
                    transform: 'translateX(-50%) scaleX(0)',
                    transformOrigin: 'center',
                    transition: 'transform 350ms ease',
                    zIndex: 1,
                  },
                  '&:hover': {
                    backgroundColor: 'transparent',
                    fontWeight: 600,
                  },
                  '&:hover::after': {
                    transform: 'translateX(-50%) scaleX(1)',
                  },
                }}
              >
                Prelistovať
              </Button>
            )}
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default CardItem;
