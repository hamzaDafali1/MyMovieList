import { GetMoviesList, GetSerieList } from "@/app/Data/actions";
import {MovieCard, SerieCard} from "../card";

export async function SlideShow({
  listName,
  lang,
  type
}: {
  listName: string;
  lang: string;
  type: string;
}) {
  
  const movieList = type == "movie" ? await GetMoviesList(listName, lang) : [];
  const serieList = type == "serie" ? await GetSerieList(listName, lang) : [];
    
    
  return (
    <div>
      {type == "movie" && (
        <div
          className="flex flex-left align-center content-center overflow-scroll mt-7 mb-10 max-h-190 overflow-y-auto
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

      {type == "serie" && (
        <div
          className="flex flex-left align-center content-center overflow-scroll mt-7 mb-10 max-h-190 overflow-y-auto
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

