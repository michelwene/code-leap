export interface PaginationProps {
  nextPage: () => void;
  prevPage: () => void;
  page: number;
  totalPages: number;
}
