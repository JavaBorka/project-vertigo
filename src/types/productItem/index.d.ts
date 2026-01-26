import { CategoryId } from 'types/categoryID';

export type ProductItem = {
  media: string;
  title: string;
  author?: string;
  genreID: CategoryId;
  category: string;
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

export type AuthorItem = {
  id: string;
  media: string;
  author: string;
  title: string;
  country: string;
  label: string;
};

interface AuthorCardItemProps {
  item: AuthorItem;
}

interface AuthorGridProps {
  items: AuthorItem[];
}
