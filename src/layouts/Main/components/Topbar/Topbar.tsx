import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { NavItem } from './components';
import { PageItem } from 'types/navigation';

interface Props {
  onSidebarOpen: () => void;
  pages: {
    books: Array<PageItem>;
    vertigo: Array<PageItem>;
    authors: Array<PageItem>;
    about: Array<PageItem>;
  };
}

const Topbar = ({ onSidebarOpen, pages }: Props) => {
  const theme = useTheme();
  const {
    books: booksPages,
    vertigo: vertigoPages,
    about: aboutPages,
    authors: authorsPages,
  } = pages;

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
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box marginLeft={4}>
          <NavItem title={'Knihy'} id={'books-pages'} items={booksPages} />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Vertigo'}
            id={'vertigo-pages'}
            items={vertigoPages}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem title={'Autori'} id={'autori-pages'} items={authorsPages} />
        </Box>
        <Box marginLeft={4}>
          <NavItem title={'O nás'} id={'about-pages'} items={aboutPages} />
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
