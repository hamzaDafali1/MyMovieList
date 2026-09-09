import { GetPersonsWorks } from "@/app/lib/data"
import { MovieCard, SerieCard } from "../cards";
import { MediaType } from "@/app/lib/definitions";

export default async function KnownWorks({ id }: { id: number }) {
  const knownWorks = await GetPersonsWorks(id);

  console.log(knownWorks.slice(0, 7));
  
    
  return (
    <div>
      <div
        className="flex flex-left align-center content-center overflow-scroll mt-7 mb-10 h-fit overflow-y-auto
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:bg-transparent
        [&::-webkit-scrollbar-thumb]:bg-stone-300
        dark:[&::-webkit-scrollbar-track]:bg-transparent
        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500
       "
      >
        {knownWorks.slice(0, 7).map((media: MediaType) => {
          return (
            <div key={media.id}>
              {media.media_type == "movie" && <MovieCard cardInfo={media} />}
              {media.media_type == "Serie" && <SerieCard cardInfo={media} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}