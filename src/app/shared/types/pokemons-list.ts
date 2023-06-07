import { DefaultType } from './default';

export interface ApiInitialResponse {
  count: number;
  next: string;
  previous?: string;
  results: DefaultType[];
}
