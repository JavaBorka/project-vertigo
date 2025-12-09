import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

interface Props {
  onSidebarOpen: () => void;
}

const Topbar = ({ onSidebarOpen }: Props) => {
  const theme = useTheme();
  // const [sortBy, setSortBy] = useState(2);

  // const handleSelectChange = (event) => {
  //   setSortBy(event.target.value);
  // };

  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Button
        onClick={() => onSidebarOpen()}
        aria-label="Menu"
        variant={'outlined'}
        sx={{
          minWidth: 'auto',
          paddingY: 1,
          borderColor: theme.palette.divider,
          color: theme.palette.text.primary,
          display: { xs: 'flex', md: 'none' },
        }}
        startIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width={20}
            height={20}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
        }
      >
        Filters
      </Button>
      <Box flexGrow={1} />
    </Box>
  );
};

export default Topbar;
