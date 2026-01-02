import { PaletteMode } from '@mui/material';

export const light = {
  alternate: {
    main: 'rgba(150, 0, 72, 0.04)',
    dark: 'rgba(150, 0, 72, 0.04)',
  },
  cardShadow: 'rgba(23, 70, 161, .11)',
  mode: 'light' as PaletteMode,
  primary: {
    main: '#960048',
    light: '#a90152ff',
    dark: '#a90152ff',
    contrastText: '#fff',
  },
  // primary: {
  //   main: '#377dff',
  //   light: '#467de3',
  //   dark: '#2f6ad9',
  //   contrastText: '#fff',
  // },
  secondary: {
    light: '#ffb74d',
    main: '#f9b934',
    dark: '#4f3d22ff',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  text: {
    primary: '#1e2022',
    secondary: '#677788',
  },
  divider: 'rgba(32, 17, 17, 0.12)',
  background: {
    paper: '#ffffff',
    default: '#ffffff',
    level2: '#f5f5f5',
    level1: '#ffffff',
  },
};

export const dark = {
  alternate: {
    main: '#1a2138',
    dark: '#151a30',
  },
  cardShadow: 'rgba(0, 0, 0, .11)',
  common: {
    black: '#000',
    white: '#fff',
  },
  mode: 'dark' as PaletteMode,
  primary: {
    main: '#1976d2',
    light: '#2196f3',
    dark: '#0d47a1',
    contrastText: '#fff',
  },
  secondary: {
    light: '#FFEA41',
    main: '#FFE102',
    dark: '#DBBE01',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  text: {
    primary: '#EEEEEF',
    secondary: '#AEB0B4',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#222B45',
    default: '#222B45',
    level2: '#333',
    level1: '#2D3748',
  },
};
