import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ScrollableNewsItems from 'components/ScrollableNewsItems';
import { useMemo } from 'react';
import { getRemoteJson } from '../../../../remoteConfig';
import { NewsItem } from 'types/newsItem';

const News = () => {
  const NEWS_DATA = useMemo(() => {
    return getRemoteJson('NEWS_JSON') as NewsItem[];
  }, []);

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          data-aos={'fade-up'}
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Zo života f.a.c.e
        </Typography>
      </Box>
      <ScrollableNewsItems items={NEWS_DATA} />
    </Box>
  );
};

export default News;
