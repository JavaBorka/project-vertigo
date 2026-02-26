import React, { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import { alpha, useTheme } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { popoverClasses } from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { PageItem } from 'types/navigation';
import { Link, useLocation } from 'react-router-dom';
import { normalizePath } from 'utils/normalizePath';

interface Props {
  title: string;
  id: string;
  onClick?: (event: React.MouseEvent) => void;
  onNavigate?: (path: string) => void;
  items: Array<PageItem>;
  to?: string;
}

const NavItem = ({ title, id, onClick, onNavigate, items, to }: Props) => {
  const theme = useTheme();
  const hasItems = items.length > 0;
  const location = useLocation();

  const activeLink = useMemo(
    () => normalizePath(location.pathname),
    [location.pathname],
  );

  let currentlyHovering = false;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    if (!hasItems && !to) {
      if (onClick) {
        onClick(event);
      }
      return;
    }
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleMouseOver = (event) => {
    // Only open dropdowns on hover when there are submenu items
    if (!hasItems) {
      return;
    }
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
    }, 190);
  };

  const linkColor = 'common.white';

  return (
    <Box>
      <Box
        component={!hasItems && to ? Link : 'div'}
        to={!hasItems && to ? to : undefined}
        display={'flex'}
        alignItems={'center'}
        aria-describedby={id}
        sx={{ cursor: 'pointer', textDecoration: 'none' }}
        onClick={!hasItems && to ? undefined : handleClick}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleCloseHover}
      >
        <Typography
          color={linkColor}
          sx={
            hasItems
              ? undefined
              : {
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: '50%',
                    bottom: -5,
                    height: 1.1,
                    width: '70%',
                    backgroundColor: theme.palette.common.white,
                    transform: 'translateX(-50%) scaleX(0)',
                    transformOrigin: 'center',
                    transition: 'transform 350ms ease',
                  },
                  '&:hover::after': {
                    transform: 'translateX(-50%) scaleX(1)',
                  },
                }
          }
        >
          {title}
        </Typography>
        {hasItems ? (
          <ExpandMoreIcon
            sx={{
              marginLeft: theme.spacing(1 / 4),
              width: 16,
              height: 16,
              color: linkColor,
            }}
          />
        ) : null}
      </Box>
      <Menu
        disableAutoFocusItem
        elevation={3}
        id={id}
        open={hasItems && Boolean(anchorEl)}
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
          style: { pointerEvents: 'auto' },
        }}
        sx={{
          zIndex: 9999,
          '.MuiPaper-root': {
            maxWidth: items.length > 12 ? 350 : 100,
            marginTop: 1.5,
            borderTopRightRadius: 8,
            borderTopLeftRadius: 8,
            borderBottomRightRadius: 8,
            borderBottomLeftRadius: 8,
            borderTop: `2px solid ${theme.palette.common.white}`,
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
                onClick={() => {
                  if (onNavigate) {
                    onNavigate(p.href);
                    handleClose();
                  }
                }}
                sx={{
                  paddingY: 1.5,
                  borderRadius: 1,
                  justifyContent: 'flex-start',
                  color:
                    normalizePath(p.href) === activeLink
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
                  backgroundColor:
                    normalizePath(p.href) === activeLink
                      ? alpha(theme.palette.primary.main, 0.1)
                      : 'transparent',
                  '&': {
                    transition: 'all 300ms ease-in-out',
                  },
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    color: theme.palette.primary.main,
                  },
                }}
              >
                <Typography
                  variant={'body2'}
                  sx={{
                    fontWeight:
                      normalizePath(p.href) === activeLink ? 600 : 400,
                  }}
                >
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
