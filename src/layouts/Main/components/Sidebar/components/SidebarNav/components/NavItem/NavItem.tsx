import React, { useMemo } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from 'react-router-dom';
import { PageItem } from 'types/navigation';
import { normalizePath } from 'utils/normalizePath';

interface Props {
  title: string;
  items: Array<PageItem>;
  to?: string;
  onNavigate?: (path: string) => void;
  onTopLevelClick?: () => void;
}

const NavItem = ({ title, items, to, onNavigate, onTopLevelClick }: Props) => {
  const theme = useTheme();
  const location = useLocation();

  const activeLink = useMemo(
    () => normalizePath(location.pathname),
    [location.pathname],
  );

  const hasItems = items.length > 0;

  const hasActiveLink = (): boolean => {
    if (hasItems) {
      return items.some((item) => normalizePath(item.href) === activeLink);
    }

    // No submenu -> check direct 'to' prop
    return normalizePath(to) === activeLink;
  };

  return (
    <Box>
      <Accordion
        disableGutters
        elevation={0}
        sx={{ backgroundColor: 'transparent' }}
      >
        <AccordionSummary
          component={!hasItems && to ? Link : 'div'}
          to={!hasItems && to ? to : undefined}
          expandIcon={hasItems ? <ExpandMoreIcon /> : null}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ padding: 0, cursor: 'pointer' }}
          onClick={!hasItems && to ? onTopLevelClick : undefined}
        >
          <Typography
            fontWeight={hasActiveLink() ? 600 : 400}
            color={hasActiveLink() ? 'primary' : 'text.primary'}
          >
            {title}
          </Typography>
        </AccordionSummary>
        {hasItems ? (
          <AccordionDetails sx={{ padding: 0 }}>
            <Grid container spacing={1}>
              {items.map((p, i) => (
                <Grid item key={i} xs={12}>
                  <Button
                    size={'large'}
                    onClick={() => onNavigate && onNavigate(p.href)}
                    fullWidth
                    sx={{
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
                      '&': {
                        transition: 'all 300ms ease-in-out',
                      },
                      '&:hover': {
                        backgroundColor: alpha(theme.palette.primary.main, 0.1),
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    {p.title}
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
                  </Button>
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        ) : null}
      </Accordion>
    </Box>
  );
};

export default NavItem;
