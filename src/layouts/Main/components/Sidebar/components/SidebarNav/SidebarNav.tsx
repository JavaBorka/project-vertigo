import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import NavItem from './components/NavItem';

interface Props {
  pages: {
    books: Array<PageItem>;
    vertigo: Array<PageItem>;
    authors: Array<PageItem>;
    about: Array<PageItem>;
  };
}

const SidebarNav = ({ pages }: Props) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const {
    books: booksPages,
    vertigo: vertigoPages,
    authors: authorsPages,
    about: aboutPages,
  } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="theFront"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src={
              mode === 'light'
                ? '/assets/svg/logo/logo-face-black.svg'
                : '/assets/svg/logo/logo-face-white.svg'
            }
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <NavItem title={'Knihy'} items={booksPages} />
        </Box>
        <Box>
          <NavItem title={'Vertigo'} items={vertigoPages} />
        </Box>
        <Box>
          <NavItem title={'Autori'} items={authorsPages} />
        </Box>
        <Box>
          <NavItem title={'O nás'} items={aboutPages} />
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarNav;
