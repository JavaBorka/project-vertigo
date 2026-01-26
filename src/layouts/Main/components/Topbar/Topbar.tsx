import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

import { NavItem } from './components';
import { useNavigate } from 'react-router-dom';
import pages from 'constants/pagesNavigation';
import { ROUTE_VERTIGO, ROUTE_AUTHORS, ROUTE_ABOUT } from 'constants/routes';

interface Props {
  onSidebarOpen: () => void;
}

const Topbar = ({ onSidebarOpen }: Props) => {
  const navigate = useNavigate();

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="theFront"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={'img'}
          src={'/assets/svg/logo/logo-face-white.svg'}
          alt="f.a.c.e vydavateľstvo"
          sx={{
            width: {
              xs: 85,
              sm: 95,
              md: 100,
              lg: 105,
            },
            height: 'auto',
            display: 'block',
          }}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box marginLeft={4}>
          <NavItem
            title={'Knihy'}
            id={'books-pages'}
            items={pages.books}
            onNavigate={(path) => navigate(path)}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Vertigo'}
            id={'vertigo-pages'}
            items={pages.vertigo}
            to={`/${ROUTE_VERTIGO}`}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Autori'}
            id={'autori-pages'}
            items={pages.authors}
            to={`/${ROUTE_AUTHORS}`}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'O nás'}
            id={'about-pages'}
            items={pages.about}
            to={`/${ROUTE_ABOUT}`}
          />
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant="text"
          disableRipple
          sx={{
            color: 'common.white',
            minWidth: 'auto',
            padding: 1,
            borderRadius: 0,
            backgroundColor: 'transparent',
            '&:hover': { backgroundColor: 'transparent' },
          }}
        >
          <MenuIcon sx={{ color: 'common.white' }} />
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
