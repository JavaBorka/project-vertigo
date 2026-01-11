import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { BasicPaginationProps } from 'types/pagination';

export default function BasicPagination({
  count,
  page,
  onChange,
}: BasicPaginationProps) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        page={page}
        onChange={onChange}
        color="primary"
      />
    </Stack>
  );
}
