import { Movie, Serie, CastActor, SeasonInfo } from "@/app/lib/definitions";
import {
  CastActorImgLink,
  PersonNotFound,
  PosterNotFound,
} from "../lib/globals";
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
            {cardInfo.poster_path ? (
              <img
                className="min-w-[130]"
                src={`https://media.themoviedb.org/t/p/w130_and_h195_face/${cardInfo.poster_path}`}
              />
            ) : (
              PosterNotFound
            )}
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
            {cardInfo.poster_path ? (
              <img
                className="min-w-[130]"
                src={`https://media.themoviedb.org/t/p/w130_and_h195_face/${cardInfo.poster_path}`}
              />
            ) : (
              PosterNotFound
            )}
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

//
export async function ActorCard({ cardInfo }: { cardInfo: CastActor }) {
  return (
    <div className="flex flex-col items-center gap-6 rounded-2xl  w-fit text-md mr-5 h-fit bg-linear-to-bl from-violet-500 to-blue-500">
      <Link href={`/person/${cardInfo.id}`}>
        <div className="flex flex-col w-[150] ">
          <div className="relative">
            {cardInfo.profile_path ? (
              <img
                className="w-[150] rounded-t-lg"
                src={`${CastActorImgLink}${cardInfo.profile_path}`}
              />
            ) : (
              PersonNotFound
            )}
          </div>
          <div className="flex flex-col pt-4 px-3 h-35">
            <h1 className="text-lg font-bold">{cardInfo.name}</h1>
            <div className="flex gap-2 dark:text-white gap-y-8">
              <span className="text-sm">{cardInfo.character}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export async function SeasonCard({
  seasonInfo,
  id,
}: {
  seasonInfo: SeasonInfo;
  id: number;
}) {
  return (
    <div className="flex flex-row gap-2 p-4 border-b-2 justify-start">
      <div className="w-[130]">
        <Link href={`/serie/${id}/season/${seasonInfo.season_number}`}>
          {seasonInfo.poster_path ?
          <img
            className="min-w-[130]"
            src={`https://media.themoviedb.org/t/p/w130_and_h195_face/${seasonInfo.poster_path}`}
          />
          :
          PosterNotFound}
        </Link>
      </div>
      <div className="flex flex-col px-5 gap-2">
        <div className="">
          <h1 className="text-xl text-white font-bold">
            <Link href={`/serie/${id}/season/${seasonInfo.season_number}`}>
              {seasonInfo.name}
            </Link>{" "}
            <span className="text-gray-200 font-normal">
              ({seasonInfo.air_date ? seasonInfo.air_date : "-"})
            </span>
          </h1>
          <h1 className="text-sm text-white font-bold">
            Number of episodes: {seasonInfo.episodes.length}
          </h1>
        </div>
        <div className="text-md text-pretty">{seasonInfo.overview}</div>
      </div>
    </div>
  );
};


