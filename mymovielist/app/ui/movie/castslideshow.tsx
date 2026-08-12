import { GetMovieCast } from "@/app/lib/data";
import { ActorCard } from "@/app/ui/card";

export default async function CastSlideShow({ id }: { id: number }) {
  const cast = await GetMovieCast(id);
  return (
    <div className="flex flex-col p-5  items-center">
      <h5>Cast</h5>
      <div className="flex flex-row overflow-scroll w-2/3 ">
        {cast.slice(0, 10).map((actor) => {
          return (
            <div key={actor.id}>
              <ActorCard cardInfo={actor} />
            </div>
          );
        })}
      </div>
    </div>
  );
}