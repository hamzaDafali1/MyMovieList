export interface Movie {
  id: number;
  original_title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  original_language: string;
  backdrop_path: string;
  genres: string[];
  tagline: string;

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

export interface CastActor {
  id: number;
  name: string;
  character: string;
  profile_path: string;
  known_for_department: string;
}

export interface MovieInfo {
  status: string;
  budget: number;
  original_language: string;
  revenue: number;
  genres: string[];
}