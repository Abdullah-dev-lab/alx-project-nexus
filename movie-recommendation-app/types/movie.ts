export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  runtime?: number;
  genres?: Genre[];
  tagline?: string;
  status?: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieResponse {
  results: Movie[];
  page: number;
  total_pages: number;
}