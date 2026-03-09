import React, { useEffect, useMemo, useState } from 'react';
import type { ProductItem } from 'types/productItem';
import { BooksContext } from 'context/BooksContext';
import { getRemoteJson } from '../remoteConfig';

interface Props {
  children: React.ReactNode;
}

export default function BooksProvider({ children }: Props) {
  const [books, setBooks] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    try {
      const data = getRemoteJson('BOOKS_JSON') as unknown;
      const next = Array.isArray(data) ? (data as ProductItem[]) : [];
      if (!cancelled) setBooks(next);
    } catch (err) {
      console.error('BOOKS_JSON parse failed', err);
      if (!cancelled) setBooks([]);
    } finally {
      if (!cancelled) setLoading(false);
    }
    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo(() => ({ books, loading }), [books, loading]);

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
}
