import { GetMovieCast } from "@/app/lib/data";
import { ActorCard } from "@/app/ui/card";

export default async function CastSlideShow({ id }: { id: number }) {
  const cast = await GetMovieCast(id);
  return (
    <div className="flex flex-col p-5 justify-items-start p-5 gap-4">
      <div className="flex flex-col w-full md:w-2/3">
        <h5 className="text-3xl flex flex-left ">Cast</h5>
      </div>
      <div className="flex flex-col items-center">
        <div
          className="flex w-full flex-row overflow-scroll overflow-y-auto h-fit [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-transparent
  [&::-webkit-scrollbar-thumb]:bg-stone-300
  dark:[&::-webkit-scrollbar-track]:bg-transparent
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 pb-3 md:w-2/3"
        >
          {cast.slice(0, 10).map((actor) => {
            return (
              <div key={actor.id}>
                <ActorCard cardInfo={actor} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}