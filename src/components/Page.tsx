import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import getTheme from 'theme';

interface Props {
  children: React.ReactNode;
}

export default function Page({ children }: Props) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    try {
      window.localStorage.removeItem('themeMode');
    } catch {
      /* do nothing */
    }
  }, []);

  return (
    <ThemeProvider theme={getTheme('light')}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Paper
        elevation={0}
        sx={{
          minHeight: '100vh',
          backgroundColor: 'background.default',
        }}
      >
        {children}
      </Paper>
    </ThemeProvider>
  );
}
