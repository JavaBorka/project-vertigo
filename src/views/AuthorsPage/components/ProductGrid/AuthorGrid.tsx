import Grid2 from '@mui/material/Grid2';
import AuthorCardItem from 'views/AuthorsPage/components/AuthorCardItem';
import { AuthorGridProps } from 'types/authorsItem';

const AuthorGrid = ({ items }: AuthorGridProps) => {
  return (
    <>
      <Grid2 container spacing={4} alignItems="flex-start">
        {items.map((item, i) => (
          <Grid2 key={`${item.id}-${i}`} size={{ xs: 12, sm: 6, md: 3 }}>
            <AuthorCardItem item={item} />
          </Grid2>
        ))}
      </Grid2>
    </>
  );
};

export default AuthorGrid;
