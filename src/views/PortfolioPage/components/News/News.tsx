import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {
  canScrollLeft,
  canScrollRight,
  getScrollDeltaPx,
  ScrollDirection,
} from 'constants/horizontalScrollhelpers';

const mock = [
  {
    image: '/assets/images/news-image-1.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    title: 'Eiusmod tempor incididunt',
    tags: ['UX', 'Design', 'Themes', 'Photography'],
    author: {
      name: 'Mária Čorejová',
      avatar: '',
    },
    date: '10 Sep',
    href: '',
  },
  {
    image: '/assets/images/news-image-2.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'Sed ut perspiciatis',
    tags: ['UX', 'Design', 'Themes', 'Photography'],
    author: {
      name: 'Ján Gavura',
      avatar: 'https://assets.maccarianagency.com/avatars/img2.jpg',
    },
    date: '02 Aug',
    href: '',
  },
  {
    image: '/assets/images/news-image-3.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'Unde omnis iste natus',
    tags: ['UX', 'Design', 'Themes', 'Photography'],
    author: {
      name: 'Mária Čorejová',
      avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
    },
    date: '05 Mar',
    href: 'https://www.artforum.sk/katalog/160739/vertigo-1-22021-kniha-nespavost',
  },
  {
    image: '/assets/images/news-image-1.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    title: 'Eiusmod tempor incididunt',
    tags: ['UX', 'Design', 'Themes', 'Photography'],
    author: {
      name: 'Mária Čorejová',
      avatar: 'https://assets.maccarianagency.com/avatars/img1.jpg',
    },
    date: '10 Sep',
    href: '',
  },
];

const News = () => {
  const theme = useTheme();
  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  const [canLeft, setCanLeft] = React.useState(false);
  const [canRight, setCanRight] = React.useState(true);

  const updateArrows = React.useCallback(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    setCanLeft(canScrollLeft(scrollContainer));
    setCanRight(canScrollRight(scrollContainer));
  }, []);

  React.useEffect(() => {
    updateArrows();
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    const onScroll = () => updateArrows();
    scrollContainer.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateArrows);
    return () => {
      scrollContainer.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateArrows);
    };
  }, [updateArrows]);

  const scrollByOne = (direction: ScrollDirection) => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    const delta = getScrollDeltaPx(scrollContainer);
    scrollContainer.scrollBy({
      left: direction === 'left' ? -delta : delta,
      behavior: 'smooth',
    });
  };
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          data-aos={'fade-up'}
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Zo života f.a.c.e
        </Typography>
      </Box>
      {/* <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
        marginBottom={4}
      >
        <Box>
          <Typography fontWeight={700} variant={'h6'} gutterBottom>
            Latest stories
          </Typography>
          <Typography color={'text.secondary'}>
            Here’s what we’ve been up to recently.
          </Typography>
        </Box>
        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
          <Box
            component={Button}
            variant="outlined"
            color="primary"
            size="large"
            marginLeft={2}
          >
            View all
          </Box>
        </Box>
      </Box> */}
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
          {mock.map((item, i) => (
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
                      {item.author.name}
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
                    {/* <Button
                      endIcon={
                        <Box
                          component={'svg'}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          width={24}
                          height={24}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </Box>
                      }
                    >
                      Prečítať viac
                    </Button> */}
                  </Box>
                </CardContent>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default News;
