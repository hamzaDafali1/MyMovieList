"use server";

import {
  CastPerson,
  Movie,
  Serie,
  MovieInfo,
  MovieCrew,
  SerieEpisode,
  SeasonInfo,
  SerieCrew,
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

export async function GetMovieCast(id: number): Promise<CastPerson[]> {
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
      (person: CastPerson) => person.known_for_department == "Acting",
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

export async function GetSerieCast(id: number): Promise<CastPerson[]> {
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
      (person: CastPerson) => person.known_for_department == "Acting",
    );

    return cast;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function GetSeasonInfo(
  id: number,
  nbrSeasons: number,
): Promise<SeasonInfo[]> {
  try {
    const urls = Array.from(
      { length: nbrSeasons+1 },
      (_, index) => `https://api.themoviedb.org/3/tv/${id}/season/${index}`,
    );

    

    const promises = urls.map(async (url) => {
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`,
            accept: "application/json",
          },
        });
        if (!response.ok) return null;
        return await response.json();
      } catch (e) {
        return null;
      }
    });

    const results = await Promise.allSettled(promises);

    const seasons = results
      .filter((res) => res.status === "fulfilled")
      .map((res) => res.value);

    const filterdSeasons = seasons.filter((season) => season!= null);


    return filterdSeasons;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function GetSerieCrew(id: number): Promise<SerieCrew[]> {
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

    const cast = data.crew.filter(
      (person: SerieCrew) => person.known_for_department != "Acting",
    );

    return cast;
  } catch (error) {
    console.error(error);
    return [];
  }
}
