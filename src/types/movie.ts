export interface Movie {
  id: string;
  title: string;
  poster_path: string;
  vote_average: number;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
}

export interface MovieResponse {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
}

export interface TrendingMovie {
  $id: string;
  title: string;
  posterUrl: string;
}
