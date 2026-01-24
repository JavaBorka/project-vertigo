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
