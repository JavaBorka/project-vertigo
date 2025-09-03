import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { alpha, useTheme } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { popoverClasses } from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
  title: string;
  id: string;
  items: Array<PageItem>;
  colorInvert?: boolean;
}

const NavItem = ({
  title,
  id,
  items,
  colorInvert = false,
}: Props): JSX.Element => {
  const theme = useTheme();

  let currentlyHovering = false;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleHover = () => {
    currentlyHovering = true;
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseHover = () => {
    currentlyHovering = false;
    setTimeout(() => {
      if (!currentlyHovering) {
        handleClose();
      }
    }, 50);
  };

  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  const linkColor = colorInvert ? 'common.white' : 'text.primary';

  return (
    <Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        aria-describedby={id}
        sx={{ cursor: 'pointer' }}
        onClick={handleClick}
        onMouseOver={handleClick}
        onMouseLeave={handleCloseHover}
      >
        <Typography color={linkColor}>
          {title}
        </Typography>
        <ExpandMoreIcon
          sx={{
            marginLeft: theme.spacing(1 / 4),
            width: 16,
            height: 16,
            color: linkColor,
          }}
        />
      </Box>
      <Menu
        disableAutoFocusItem
        elevation={3}
        id={id}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        PaperProps={{
          onMouseEnter: handleHover,
          onMouseLeave: handleCloseHover,
          style: { pointerEvents: 'auto' }
        }}
        sx={{
          '.MuiPaper-root': {
            maxWidth: items.length > 12 ? 350 : 250,
            padding: 1,
            marginTop: 2,
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
            borderBottomRightRadius: 8,
            borderBottomLeftRadius: 8,
            borderTop: `3px solid ${theme.palette.primary.main}`,
          },
          [`&.${popoverClasses.root}`]: {
            pointerEvents: 'none',
          },
        }}
      >
        <Grid container spacing={0.5}>
          {items.map((p, i) => (
            <Grid item key={i} xs={items.length > 12 ? 6 : 12}>
              <MenuItem
                component={'a'}
                href={p.href}
                sx={{
                  paddingY: 1.5,
                  borderRadius: 1,
                  justifyContent: 'flex-start',
                  color:
                    activeLink === p.href
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
                  backgroundColor:
                    activeLink === p.href
                      ? alpha(theme.palette.primary.main, 0.1)
                      : 'transparent',
                  fontWeight: activeLink === p.href ? 600 : 400,
                }}
              >
                <Typography variant={'body2'}>
                  {p.title}
                </Typography>
                {p.isNew && (
                  <Box
                    padding={0.5}
                    display={'inline-flex'}
                    borderRadius={1}
                    bgcolor={'primary.main'}
                    marginLeft={2}
                  >
                    <Typography
                      variant={'caption'}
                      sx={{ color: 'common.white', lineHeight: 1 }}
                    >
                      new
                    </Typography>
                  </Box>
                )}
              </MenuItem>
            </Grid>
          ))}
        </Grid>
      </Menu>
    </Box>
  );
};

export default NavItem;
