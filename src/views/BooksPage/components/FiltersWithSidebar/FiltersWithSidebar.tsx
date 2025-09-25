import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import Container from 'components/Container';
import { Topbar, Sidebar } from './components';
import ProductGrid from '../ProductGrid';
 
const WithCollapsibleMenuItems = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  return (
    <Container>
      <Box display={'flex'}>
        <Sidebar
          onClose={handleSidebarClose}
          open={open}
          variant={isMd ? 'permanent' : 'temporary'}
        />
        <Box marginLeft={{ xs: 0, md: 4 }} width={1}>
          <Topbar onSidebarOpen={handleSidebarOpen} />
          <ProductGrid />
        </Box>
      </Box>
    </Container>
  );
};

export default WithCollapsibleMenuItems;
