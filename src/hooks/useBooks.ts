import { BooksContext } from 'context/BooksContext';
import { useContext } from 'react';

export function useBooks() {
  return useContext(BooksContext);
}
