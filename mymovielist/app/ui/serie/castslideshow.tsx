import { GetSerieCast } from "@/app/lib/data";
import { PersonCard } from "@/app/ui/cards";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link"

export default async function CastSlideShow({ id }: { id: number }) {
  const cast = await GetSerieCast(id);
  return (
    <div
      className="flex w-full flex-row overflow-scroll overflow-y-auto h-fit [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-transparent
  [&::-webkit-scrollbar-thumb]:bg-stone-300
  dark:[&::-webkit-scrollbar-track]:bg-transparent
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 pb-3 w-full"
    >
      {cast.slice(0, 9).map((actor) => {
        return (
          <div key={actor.id}>
            <PersonCard cardInfo={actor} />
          </div>
        );
      })}

      <div className="flex flex-col items-center gap-6 rounded-2xl  w-fit rounded-none text-md mr-5 h-full bg-linear-to-bl from-violet-500 to-blue-500 rounded-xl ">
        <Link href={`/movie/${id}/cast`}>
          <div className="flex flex-col h-[330] w-[150] justify-center items-center">
            <h3>
              View more <ArrowRightIcon className="w-15" />{" "}
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
}