import { CategoryId } from 'types/categoryID';

export type ProductItem = {
  media: string;
  title: string;
  author?: string;
  genreID: CategoryId;
  label?: string;
  date: string;
  img?: string;
  href?: string;
  pdf?: string;
};

interface CardItemProps {
  item: ProductItem;
}

interface ProductGridProps {
  items: ProductItem[];
}
