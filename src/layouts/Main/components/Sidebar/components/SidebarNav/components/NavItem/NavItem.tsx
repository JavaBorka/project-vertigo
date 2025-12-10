import React, { useEffect, useState } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { PageItem } from 'types/navigation';

interface Props {
  title: string;
  items: Array<PageItem>;
}

const NavItem = ({ title, items }: Props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  const hasItems = items.length > 0;

  // Check if a simple (no-submenu) heading matches the active route
  // Active links have specific style, so we need to detect them
  const isActiveSingleHeading = (
    title: string,
    activeLink: string,
  ): boolean => {
    const routeMap: Record<string, string> = {
      Vertigo: '/vertigo',
      Autori: '/autori',
      'O nás': '/onas',
    };

    return routeMap[title] === activeLink;
  };

  const hasActiveLink = (): boolean => {
    if (hasItems) {
      return items.some((item) => item.href === activeLink);
    }

    // No submenu -> check via title-to-route mapping
    return isActiveSingleHeading(title, activeLink);
  };

  return (
    <Box>
      <Accordion
        disableGutters
        elevation={0}
        sx={{ backgroundColor: 'transparent' }}
      >
        <AccordionSummary
          expandIcon={hasItems ? <ExpandMoreIcon /> : null}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ padding: 0, cursor: 'pointer' }}
          onClick={() => {
            if (!hasItems) {
              if (title === 'Vertigo') {
                navigate('/vertigo');
              }
              if (title === 'Autori') {
                navigate('/autori');
              }
              if (title === 'O nás') {
                navigate('/onas');
              }
              return;
            }
          }}
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
                    component={'a'}
                    href={p.href}
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
