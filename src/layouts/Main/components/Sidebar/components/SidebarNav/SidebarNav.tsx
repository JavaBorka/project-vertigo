import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import NavItem from './components/NavItem';
import pages from 'constants/pagesNavigation';
import { ROUTE_VERTIGO, ROUTE_AUTHORS, ROUTE_ABOUT } from 'constants/routes';

interface SidebarProps {
  onClose?: () => void;
}

const SidebarNav = ({ onClose }: SidebarProps) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const navigate = useNavigate();

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
          <NavItem
            title={'Knihy'}
            items={pages.books}
            onNavigate={(path) => {
              navigate(path);
              onClose && onClose();
            }}
          />
        </Box>
        <Box>
          <NavItem
            title={'Vertigo'}
            items={pages.vertigo}
            to={`/${ROUTE_VERTIGO}`}
            onTopLevelClick={() => onClose && onClose()}
          />
        </Box>
        <Box>
          <NavItem
            title={'Autori'}
            items={pages.authors}
            to={`/${ROUTE_AUTHORS}`}
            onTopLevelClick={() => onClose && onClose()}
          />
        </Box>
        <Box>
          <NavItem
            title={'O nás'}
            items={pages.about}
            to={`/${ROUTE_ABOUT}`}
            onTopLevelClick={() => onClose && onClose()}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarNav;
