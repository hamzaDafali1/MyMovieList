import { Movie, Serie } from "@/app/lib/definitions";


export async function GetMovieById(id: string) {
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

export async function GetSerieList(listName: string, lang: string): Promise<Serie[]> {
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