export interface BasicPaginationProps {
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export type handlePageChange = (
  _event: React.ChangeEvent<unknown>,
  page: number,
) => void;
