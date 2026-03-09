import { createContext } from 'react';
import type { ProductItem } from 'types/productItem';

export interface BooksContextValue {
  books: ProductItem[];
  loading: boolean;
}

export const BooksContext = createContext<BooksContextValue>({
  books: [],
  loading: true,
});
