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
  number_of_seasons: number;
  seasons: SeasonInfo[];
  created_by: SerieCrew[];
}

export interface CastActor {
  id: number;
  name: string;
  character: string;
  profile_path: string;
  known_for_department: string;
}

export interface MovieCrew {
  id: number;
  name: string;
  department: string;
  job: string;
  known_for_department: string;
}

export interface SerieCrew {
  id: number;
  name: string;
  department: string;
  job: string;
  known_for_department: string;
}

export interface MovieInfo {
  status: string;
  budget: number;
  original_language: string;
  revenue: number;
  genres: string[];
}

export interface Genre {
  name: string;
  id: number;
}

export interface SeasonInfo {
  id: number;
  episodes: SerieEpisode[];
  name: string;
  overview: string;
  air_date: number;
  season_number: number;
  poster_path: string;
}


export interface SerieEpisode {
  id: number;
  episode_number: number;
  name: string;
  overview: string;
  runtime: number;
  season_number: number;
  still_path: string;
}

