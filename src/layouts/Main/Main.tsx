import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';

import Container from 'components/Container';

import { Topbar, Sidebar, Footer } from './components';

import pages from '../navigation';

interface Props {
  children: React.ReactNode;
  colorInvert?: boolean;
  bgcolor?: string;
}

const Main = ({ children }: Props) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = (): void => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = (): void => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  const pathname =
    typeof window !== 'undefined' && window.location
      ? window.location.pathname
      : '';
  const pathColorMap: Record<string, string> = {
    '/': 'primary.main',
    '/poezia': 'primary.poetry',
    '/proza': 'primary.prose',
    '/veda': 'primary.science',
    '/deti': 'primary.main',
    '/vertigo': 'primary.main',
    '/autori': 'primary.main',
    '/onas': 'primary.main',
  };
  const mappedColor = pathColorMap[pathname];

  return (
    <Box>
      <AppBar
        position={'sticky'}
        sx={{
          top: 0,
          backgroundColor: mappedColor,
          boxShadow: 'none',
          zIndex: {
            sx: 0,
            md: theme.zIndex.drawer + 1,
          },
        }}
        elevation={0}
      >
        <Container
          marginTop={{ xs: 0 }}
          marginBottom={{ xs: 0 }}
          paddingTop={{ xs: 1.5 }}
          paddingBottom={{ xs: 1.5 }}
        >
          <Topbar onSidebarOpen={handleSidebarOpen} pages={pages} />
        </Container>
      </AppBar>
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      <main>
        {children}
        <Divider />
      </main>
      <Container
        marginTop={0}
        marginBottom={0}
        sx={{
          backgroundColor: mappedColor,
        }}
        maxWidth="xl"
        disableGutters
      >
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
