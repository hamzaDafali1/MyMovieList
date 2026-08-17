import {
  CastActor,
  Movie,
  Serie,
  MovieInfo,
  MovieCrew,
  SerieEpisode
} from "@/app/lib/definitions";
import { env } from "process";

export async function GetMovieById(id: number) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`,
        accept: "application/json",
      },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
}

export async function GetMoviesList(
  listName: string,
  lang: string,
): Promise<Movie[]> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${listName}?language=${lang}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`,
          accept: "application/json",
        },
      },
    );
    const data = await response.json();
    //console.log(data.results);

    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function GetMovieCast(id: number): Promise<CastActor[]> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits`,
      {
        headers: {
          Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`,
          accept: "application/json",
        },
      },
    );

    const data = await response.json();

    const cast = data.cast.filter(
      (person: CastActor) => person.known_for_department == "Acting",
    );

    return cast;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function GetMovieCrew(id: number): Promise<MovieCrew[]> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits`,
      {
        headers: {
          Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`,
          accept: "application/json",
        },
      },
    );

    const data = await response.json();

    const cast = data.crew.filter(
      (person: MovieCrew) => person.known_for_department != "Acting",
    );

    return cast;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function GetMovieInfoById(id: number) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`,
        accept: "application/json",
      },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
}

export async function GetSerieById(id: number) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/tv/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`,
        accept: "application/json",
      },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
}

export async function GetSerieList(
  listName: string,
  lang: string,
): Promise<Serie[]> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${listName}?language=${lang}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`,
          accept: "application/json",
        },
      },
    );
    const data = await response.json();
    //console.log(data.results);

    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function GetSerieCast(id: number): Promise<CastActor[]> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/credits`,
      {
        headers: {
          Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`,
          accept: "application/json",
        },
      },
    );

    const data = await response.json();

    const cast = data.cast.filter(
      (person: CastActor) => person.known_for_department == "Acting",
    );

    return cast;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function GetSerieEpisodes(
  id: number,
  nbrSeasons: number,
): Promise<SerieEpisode[]> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/season/${nbrSeasons}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`,
          accept: "application/json",
        },
      },
    );

    const data = await response.json();

    const episodes = data.episodes;

    return episodes;
  } catch (error) {
    console.error(error);
    return [];
  }
}