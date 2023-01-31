export interface InputTs {
  searchValue: string;
  regionValue: string;
  Search: (e: string) => void;
  Filter: (e: string) => void;
  // FilterAndSearch: (e: string) => void;
}
