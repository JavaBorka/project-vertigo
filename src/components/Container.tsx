import React from 'react';
import Box from '@mui/material/Box';

interface Props {
  children: React.ReactNode;
  // All other props

  [x: string]: any;
}

const Container = ({ children, ...rest }: Props) => (
  <Box
    maxWidth={{ sm: 720, md: 1236 }}
    width={1}
    margin={'0 auto'}
    paddingX={{ xs: 3, md: 6 }}
    paddingY={{ xs: 2, md: 3 }}
    {...rest}
  >
    {children}
  </Box>
);

export default Container;
