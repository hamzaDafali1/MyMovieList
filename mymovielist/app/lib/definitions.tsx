import { MovieCard } from "../ui/cards";

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
  spoken_languages: Spoken_languages[];
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
  spoken_languages: Spoken_languages[];
}

export interface CastPerson {
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

export interface PersonInfo {
  id: number;
  name: string;
  birthday: string;
  deathday: string;
  also_known_as: string[];
  gender: number;
  place_of_birth: string;
  known_for_department: string;
  profile_path: string;
}

export interface Spoken_languages {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface MediaType extends Movie, Serie {
  media_type: string;
}