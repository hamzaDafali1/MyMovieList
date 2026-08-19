import { GetMoviesList, GetSerieList } from "@/app/lib/data";
import {MovieCard, SerieCard} from "../card";
import { Movie, Serie } from "@/app/lib/definitions";

export default async function SlideShow({
  listName,
  lang,
  type
}: {
  listName: string;
  lang: string;
  type: string;
}) {

  const testMovie: Movie = {
    id: 2,
    original_title: "string",
    release_date: "string",
    vote_average: 3,
    overview: "string",
    poster_path: "string",
    original_language: "string",
    backdrop_path: "string",
    genres: [" fsfd", "fdshg"],
    tagline: "string",
  }; 

  /* const testSerie:Serie = {
    id: 6,
    original_name: "string",
    first_air_date: "string",
    vote_average: 9,
    overview: "string",
    poster_path: "string",
    original_language: "string",
    number_of_seasons: 5,
    seasons: [{name:'mark'}],
    created_by: SerieCrew[],
  } */
  
  const movieList =
    type == "movie" ? await GetMoviesList(listName, lang) : [testMovie];
  const serieList =
    type == "serie" ? await GetSerieList(listName, lang) : [];
    
    
  return (
    <div>
      {type == "movie" && movieList != null && (
        <div
          className="flex flex-left align-center content-center overflow-scroll mt-7 mb-10 h-fit overflow-y-auto
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-transparent
  [&::-webkit-scrollbar-thumb]:bg-stone-300
  dark:[&::-webkit-scrollbar-track]:bg-transparent
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500
 "
        >
          {movieList.map((movie) => {
            return (
              <div key={movie.id}>
                <MovieCard cardInfo={movie} />
              </div>
            );
          })}
        </div>
      )}

      {type == "serie" && serieList != null && (
        <div
          className="flex flex-left align-center content-center overflow-scroll mt-7 mb-10 h-fit overflow-y-auto
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-transparent
  [&::-webkit-scrollbar-thumb]:bg-stone-300
  dark:[&::-webkit-scrollbar-track]:bg-transparent
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500
 "
        >
          {serieList.map((serie) => {
            return (
              <div key={serie.id}>
                <SerieCard cardInfo={serie} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

