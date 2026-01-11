import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import Container from 'components/Container';
import {
  canScrollLeft,
  canScrollRight,
  getScrollDeltaPx,
  ScrollDirection,
} from 'utils/horizontalScrollhelpers';

const mock = [
  {
    media: '/assets/images/vertigo-obalka-1.png',
    title: 'Vertigo 4/2025',
    author: '',
    category: 'vertigo',
    label: 'Tak pekne rozprávaš po slovensky ani prízvuk nemáš',
    date: '2025-12-20',
    img: '',
    href: 'https://www.artforum.sk/katalog/181748/vertigo-22023-priloha-poldoba-rozpadu',
  },
  {
    media: '/assets/images/kniha-obalka-1.jpg',
    title: ' Spoločný jazyk',
    author: 'Jürg Halter',
    category: 'poézia',
    label:
      'Zahľadíš sa na strop, nadchnutý vlastným nešťastím, pomaly prerastáš sám seba.',
    date: '2025-12-10',
    img: '',
    pdf: '',
    href: 'https://www.artforum.sk/katalog/186108/slovnik-diel-slovenskej-literatury-po-roku-1989',
  },
  {
    media: '/assets/images/vertigo-obalka-2.png',
    title: 'Vertigo 3/2025',
    author: '',
    category: 'vertigo',
    label: '',
    date: '2025-11-20',
    img: '',
    pdf: '',
    href: 'https://www.artforum.sk/katalog/170542/vertigo-12022-kniha-rozkvitni-pre-seba',
  },
  {
    media: '/assets/images/vertigo-obalka-3.png',
    title: 'Vertigo 2/2025',
    author: '',
    category: 'vertigo',
    label: 'Do konca prázdnin ostávali ešte tri týždne.',
    date: '2025-10-20',
    img: '',
    pdf: 'https://cs.wikipedia.org/wiki/Portable_Document_Format',
    href: 'https://www.artforum.sk/katalog/160739/vertigo-1-22021-kniha-nespavost',
  },
  {
    media: '/assets/images/vertigo-obalka-4.png',
    title: 'Vertigo 1/2025',
    author: '',
    category: 'vertigo',
    label: '',
    date: '2025-09-20',
    img: '',
    pdf: 'https://cs.wikipedia.org/wiki/Portable_Document_Format',
    href: '',
  },
];

const NewTitles = () => {
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

    const handleScroll = () => updateArrows();

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateArrows);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateArrows);
    };
  }, [updateArrows]);

  const scrollByOne = (direction: ScrollDirection) => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollDeltaPx = getScrollDeltaPx(scrollContainer);

    scrollContainer.scrollBy({
      left: direction === 'left' ? -scrollDeltaPx : scrollDeltaPx,
      behavior: 'smooth',
    });
  };

  return (
    <Container>
      <Box marginBottom={4} marginTop={4}>
        <Typography
          variant="h4"
          data-aos={'fade-up'}
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Najnovšie tituly
        </Typography>
        {/* <Typography
          variant="h6"
          color={'text.secondary'}
          align={'center'}
          data-aos={'fade-up'}
        >
          Najnovšie tituly
        </Typography> */}
      </Box>
      <Box position={'relative'}>
        {canLeft && (
          <Box
            onClick={() => scrollByOne('left')}
            aria-label="scroll left"
            role="button"
            sx={{
              position: 'absolute',
              top: '35%',
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
              top: '35%',
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
          onScroll={updateArrows}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            gap: {
              xs: 2,
              sm: 3,
              md: 4,
              lg: 5,
            },
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
                flex: '0 0 75%',
                scrollSnapAlign: 'center',
                '@media (min-width:360px)': { flex: '0 0 63%' },
                '@media (min-width:380px)': { flex: '0 0 60%' },
                '@media (min-width:430px)': { flex: '0 0 55%' },
                '@media (min-width:500px)': { flex: '0 0 44%' },
                '@media (min-width:630px)': { flex: '0 0 42%' },
                '@media (min-width:770px)': { flex: '0 0 40%' },
                '@media (min-width:1000px)': { flex: '0 0 25%' },
                '@media (min-width:1150px)': { flex: '0 0 20%' },
              }}
            >
              <Box
                display={'block'}
                width={1}
                sx={{
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
                  onClick={() => {
                    if (item.href) {
                      window.open(item.href, '_blank', 'noopener,noreferrer');
                    } else if (!item.href && item.pdf) {
                      window.open(item.pdf, '_blank', 'noopener,noreferrer');
                    }
                  }}
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
                              fontFamily:
                                'Georgia, "Times New Roman", Times, serif',
                              fontStyle: 'italic',
                            },
                            '&::after': {
                              content: '"“"',
                              color: 'primary.main',
                              fontWeight: 700,
                              fontSize: { xs: 20, sm: 22, md: 24 },
                              marginLeft: 0.6,
                              fontFamily:
                                'Georgia, "Times New Roman", Times, serif',
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
                    <Typography
                      fontWeight={300}
                      marginBottom={0.5}
                      fontSize={16}
                    >
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
                          window.open(
                            item.href,
                            '_blank',
                            'noopener,noreferrer',
                          )
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
                          window.open(
                            item.pdf,
                            '_blank',
                            'noopener,noreferrer',
                          );
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
                  {/* <Box marginTop={2} display={'flex'} alignItems={'center'}>
                  {item.oldPrice && (
                    <Typography
                      marginRight={0.5}
                      color={'text.secondary'}
                      sx={{ textDecoration: 'line-through' }}
                    >
                      {item.oldPrice}
                    </Typography>
                  )}
                  <Typography
                    fontWeight={700}
                    color={item.oldPrice ? 'error.light' : 'text.primary'}
                  >
                    {item.price}
                  </Typography>
                </Box> */}
                </Card>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default NewTitles;
