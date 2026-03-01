export type AuthorItem = {
  id: number;
  media: string | null;
  author: string | null;
  country: string | null;
  label: string | null;
};

interface AuthorCardItemProps {
  item: AuthorItem;
}

interface AuthorGridProps {
  items: AuthorItem[];
}
