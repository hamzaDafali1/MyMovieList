export interface Movie {
  id: number;
  original_title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  original_language: string;
}

export interface Serie {
  id: number;
  original_name: string;
  first_air_date: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  original_language: string;
}