import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { GetMovieById, GetMovieCast } from "../lib/data";
import { Movie, Serie, CastActor } from "@/app/lib/definitions";
import Link from "next/link";

export async function MovieCard({ cardInfo }: { cardInfo: Movie }) {
  return (
    <div className="flex flex-col items-center gap-6 rounded-2xl  w-fit rounded-none text-md mr-5 h-fit ">
      <Link href={`/movie/${cardInfo.id}`}>
        <div className="flex flex-col w-[160]">
          <div className="relative">
            <span className=" font-semibold text-sm text-white bg-blue-500/80 rounded-lg p-1 my-2 mx-28 absolute ">
              {cardInfo.release_date.slice(0, 4)}
            </span>
            <img
              className="w-[160] rounded-lg"
              src={`https://image.tmdb.org/t/p/w220_and_h330_face/${cardInfo.poster_path}`}
            />
          </div>
          <div className="flex flex-col  py-9 px-1">
            <h1 className="text-lg">{cardInfo.original_title}</h1>
            <div className="flex gap-2 font-medium text-blue-500 dark:text-blue-500 gap-y-8">
              <span className="">{cardInfo.vote_average.toFixed(2)}/10 . </span>
              <span className="">
                {cardInfo.original_language.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export async function SerieCard({ cardInfo }: { cardInfo: Serie }) {

  return (
    <div className="flex flex-col items-center gap-6 rounded-2xl  w-fit rounded-none text-md mr-5 h-fit ">
      <Link href={`/serie/${cardInfo.id}`}>
        <div className="flex flex-col w-[160]">
          <div className="relative">
            <span className=" font-semibold text-sm text-white bg-blue-500/80 rounded-lg p-1 my-2 mx-28 absolute ">
              {cardInfo.first_air_date.slice(0, 4)}
            </span>
            <img
              className="w-[160] rounded-lg"
              src={`https://image.tmdb.org/t/p/w220_and_h330_face/${cardInfo.poster_path}`}
            />
          </div>
          <div className="flex flex-col  py-9 px-1">
            <h1 className="text-xl">{cardInfo.original_name}</h1>
            <div className="flex gap-2 font-medium text-blue-500 dark:text-blue-500 gap-y-8">
              <span className="">{cardInfo.vote_average.toFixed(2)}/10 . </span>
              <span className="">
                {cardInfo.original_language.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export async function ActorCard({ cardInfo }: { cardInfo: CastActor }){

  return (
    <div>

    </div>
  )
};


