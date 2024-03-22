import { Pagination } from './pagination';

export interface Response<T> {
  pagination: Pagination;
  data: T[];
  success: boolean;
  errors: any;
}
