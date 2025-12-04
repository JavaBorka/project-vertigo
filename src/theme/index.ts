import { Theme, responsiveFontSizes } from '@mui/material';
import { createTheme, ComponentsOverrides } from '@mui/material/styles';
import shadows from './shadows';
import { light, dark } from './palette';
import React from 'react';

const getTheme = (mode: string): Theme =>
  responsiveFontSizes(
    createTheme({
      palette: mode === 'light' ? light : dark,
      shadows: shadows(mode),
      typography: {
        // Use Inter temporarily to avoid heavy look while regular Archia is unavailable
        fontFamily: '"Inter","Arial",sans-serif',
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
          fontFamily: '"Archia","Inter","Arial",sans-serif',
          fontWeight: 700,
        },
        h2: {
          fontFamily: '"Archia","Inter","Arial",sans-serif',
          fontWeight: 700,
        },
        h3: {
          fontFamily: '"Archia","Inter","Arial",sans-serif',
          fontWeight: 700,
        },
        h4: {
          fontFamily: '"Archia","Inter","Arial",sans-serif',
          fontWeight: 700,
        },
        h5: {
          fontFamily: '"Archia","Inter","Arial",sans-serif',
          fontWeight: 700,
        },
        h6: {
          fontFamily: '"Archia","Inter","Arial",sans-serif',
          fontWeight: 700,
        },

        button: {
          textTransform: 'none',
          fontWeight: 'medium' as React.CSSProperties['fontWeight'],
        },
      },
      zIndex: {
        appBar: 1200,
        drawer: 1300,
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            '@font-face': [
              // {
              //   fontFamily: 'Archia',
              //   fontStyle: 'normal',
              //   fontWeight: 400,
              //   fontDisplay: 'swap',
              //   src: 'url("/fonts/archia-regular.otf") format("opentype")',
              // },
              {
                fontFamily: 'Archia',
                fontStyle: 'normal',
                fontWeight: 700,
                fontDisplay: 'swap',
                src: 'url("/fonts/archia-bold.otf") format("opentype")',
              },
            ],
            body: {
              fontFamily: '"Inter","Arial",sans-serif',
              fontWeight: 400,
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              fontWeight: 400,
              borderRadius: 5,
              paddingTop: 10,
              paddingBottom: 10,
            },
            containedSecondary: mode === 'light' ? { color: 'white' } : {},
          } as ComponentsOverrides['MuiButton'],
        },
        MuiInputBase: {
          styleOverrides: {
            root: {
              borderRadius: 5,
            },
          } as ComponentsOverrides['MuiInputBase'],
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              borderRadius: 5,
            },
            input: {
              borderRadius: 5,
            },
          } as ComponentsOverrides['MuiOutlinedInput'],
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 8,
            },
          } as ComponentsOverrides['MuiCard'],
        },
      },
    }),
  );

export default getTheme;
