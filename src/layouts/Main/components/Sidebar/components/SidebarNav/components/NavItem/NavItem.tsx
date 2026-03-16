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
        sx={{
          backgroundColor: 'transparent',
          '&:before': { display: 'none' },
          '&.Mui-expanded': { margin: 0 },
        }}
      >
        <AccordionSummary
          component={!hasItems && to ? Link : 'div'}
          to={!hasItems && to ? to : undefined}
          expandIcon={hasItems ? <ExpandMoreIcon /> : null}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            px: 1.25,
            py: 1,
            borderRadius: 1.5,
            minHeight: 44,
            cursor: 'pointer',
            transition: 'background-color 200ms ease, color 200ms ease',
            '& .MuiAccordionSummary-content': {
              margin: 0,
              alignItems: 'center',
              gap: 1,
            },
            '& .MuiAccordionSummary-expandIconWrapper': {
              color: 'text.secondary',
              transition: 'transform 200ms ease',
            },
            '&.Mui-expanded .MuiAccordionSummary-expandIconWrapper': {
              transform: 'rotate(180deg)',
            },
            ...(hasActiveLink()
              ? {
                  backgroundColor: alpha(theme.palette.primary.main, 0.08),
                }
              : {
                  '@media (hover: hover) and (pointer: fine)': {
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.text.primary, 0.04),
                    },
                  },
                }),
          }}
          onClick={!hasItems && to ? onTopLevelClick : undefined}
        >
          <Typography
            fontWeight={hasActiveLink() ? 650 : 450}
            color={
              hasActiveLink() ? theme.palette.primary.main : 'text.primary'
            }
            sx={{
              letterSpacing: 0.2,
              fontSize: 18,
              transition: 'color 200ms ease',
            }}
          >
            {title}
          </Typography>
        </AccordionSummary>
        {hasItems ? (
          <AccordionDetails sx={{ padding: 0, pt: 0.5 }}>
            <Grid container spacing={0.5}>
              {items.map((p, i) => (
                <Grid item key={i} xs={12}>
                  <Button
                    size={'large'}
                    onClick={() => onNavigate && onNavigate(p.href)}
                    fullWidth
                    sx={{
                      justifyContent: 'flex-start',
                      textAlign: 'left',
                      borderRadius: 1.5,
                      ml: 1.25,
                      px: 1.5,
                      py: 1.25,
                      fontSize: 16,
                      lineHeight: 1.25,
                      color:
                        normalizePath(p.href) === activeLink
                          ? theme.palette.primary.main
                          : theme.palette.text.primary,
                      backgroundColor: 'transparent',
                      fontWeight:
                        normalizePath(p.href) === activeLink ? 650 : 450,
                      '&::before': {
                        content: '""',
                        width: 6,
                        flex: '0 0 6px',
                      },
                      '&': {
                        transition: 'all 300ms ease-in-out',
                      },
                      '@media (hover: hover) and (pointer: fine)': {
                        '&:hover': {
                          backgroundColor: alpha(
                            theme.palette.primary.main,
                            0.08,
                          ),
                          color: theme.palette.primary.main,
                        },
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
