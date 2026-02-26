import Grid2 from '@mui/material/Grid2';
import CardItem from 'components/CardItem';
import { ProductGridProps } from 'types/productItem';

const ProductGrid = ({ items }: ProductGridProps) => {
  return (
    <>
      <Grid2 container spacing={4} alignItems="flex-end">
        {items.map((item, i) => (
          <Grid2 key={`${item.title}-${i}`} size={{ xs: 12, sm: 6, md: 3 }}>
            <CardItem item={item} />
          </Grid2>
        ))}
      </Grid2>
    </>
  );
};

export default ProductGrid;
