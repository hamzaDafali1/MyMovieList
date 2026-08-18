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

/*
"air_date": "2011-04-17",
      "episode_number": 1,
      "episode_type": "standard",
      "id": 63056,
      "name": "Winter Is Coming",
      "overview": "Jon Arryn, the Hand of the King, is dead. King Robert Baratheon plans to ask his oldest friend, Eddard Stark, to take Jon's place. Across the sea, Viserys Targaryen plans to wed his sister to a nomadic warlord in exchange for an army.",
      "production_code": "101",
      "runtime": 62,
      "season_number": 1,
      "show_id": 1399,
      "still_path": "/9hGF3WUkBf7cSjMg0cdMDHJkByd.jpg",
      "vote_average": 8.1,
      "vote_count": 396,
*/
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

