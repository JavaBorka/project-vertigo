import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useScroll } from 'hooks/useScroll';
import { NewsItem } from 'types/newsItem';

interface NewsGridProps {
  items: NewsItem[];
}

export const ScrollableNewstItems = ({ items }: NewsGridProps) => {
  const theme = useTheme();

  const { scrollRef, canLeft, canRight, scrollByOne } = useScroll();

  return (
    <>
      <Box position={'relative'}>
        {canLeft && (
          <Box
            onClick={() => scrollByOne('left')}
            aria-label="scroll left"
            role="button"
            sx={{
              position: 'absolute',
              top: {
                xs: '13%',
                sm: '16%',
                md: '17%',
                lg: '17%',
              },
              left: '10px',
              cursor: 'pointer',
              zIndex: 2,
            }}
          >
            <Box
              component={'img'}
              src={'/assets/svg/logo/arrow-left.svg'}
              alt={'left arrow'}
              sx={{ width: 28, height: 28, display: 'block' }}
            />
          </Box>
        )}
        {canRight && (
          <Box
            onClick={() => scrollByOne('right')}
            aria-label="scroll right"
            role="button"
            sx={{
              position: 'absolute',
              top: {
                xs: '13%',
                sm: '16%',
                md: '17%',
                lg: '17%',
              },
              right: '10px',
              cursor: 'pointer',
              zIndex: 2,
            }}
          >
            <Box
              component={'img'}
              src={'/assets/svg/logo/arrow-right.svg'}
              alt={'right arrow'}
              sx={{ width: 28, height: 28, display: 'block' }}
            />
          </Box>
        )}
        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            gap: 2,
            px: 1,
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
            alignItems: 'stretch',
          }}
        >
          {items.map((item, i) => (
            <Box
              key={i}
              sx={{
                flex: '0 0 80%',
                scrollSnapAlign: 'start',
                '@media (min-width:600px)': { flex: '0 0 60%' },
                '@media (min-width:900px)': { flex: '0 0 45%' },
                '@media (min-width:1100px)': { flex: '0 0 30%' },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                borderRadius={0}
                boxShadow={0}
                display={'flex'}
                flexDirection={'column'}
                sx={{ backgroundImage: 'none', bgcolor: 'transparent' }}
              >
                <Box sx={{ width: 1 }}>
                  <Box
                    component={'img'}
                    loading="lazy"
                    height={'auto'}
                    width={1}
                    src={item.image}
                    alt="..."
                    sx={{
                      objectFit: 'cover',
                      maxHeight: 200,
                      borderRadius: 2,
                      filter:
                        theme.palette.mode === 'dark'
                          ? 'brightness(0.7)'
                          : 'none',
                    }}
                  />
                </Box>
                <CardContent
                  sx={{
                    width: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    color={'text.primary'}
                    fontWeight={700}
                    sx={{ textTransform: 'uppercase' }}
                  >
                    {item.title}
                  </Typography>
                  <Box marginY={1}>
                    <Typography
                      variant={'caption'}
                      color={'text.secondary'}
                      component={'i'}
                    >
                      {item.author}
                    </Typography>
                  </Box>
                  <Typography color="text.secondary">
                    {item.description}
                  </Typography>
                  <Box
                    marginTop={1}
                    display={'flex'}
                    justifyContent={'flex-start'}
                  >
                    {item.href && (
                      <Button
                        className="buy-button"
                        onClick={() =>
                          window.open(
                            item.href,
                            '_blank',
                            'noopener,noreferrer',
                          )
                        }
                        sx={{
                          position: 'relative',
                          paddingLeft: 0,

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
                  </Box>
                </CardContent>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ScrollableNewstItems;
