import { GetSerieById, GetSerieCrew } from "@/app/lib/data";
import { InfoCardImgLink, BackdropImgLink } from "@/app/lib/globals";
import {
  BookmarkIcon,
  HeartIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";
import { Genre } from "@/app/lib/definitions";
import Link from "next/link";

export default async function infoCard({ serieId }: { serieId: number }) {
  const movieInfo = await GetSerieById(serieId);
  const crew = await GetSerieCrew(serieId);
  const creator = movieInfo.created_by[0] ? movieInfo.created_by : [{id: 0}];
  console.log(movieInfo.created_by);
  

  return (
    <div
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movieInfo.backdrop_path})`,
      }}
      className="flex flex-row bg-cover"
    >
      <div className="flex flex-col ">
        <div
          className="flex flex-col bg-radial align-center content-center
 from-[#303030]/70 from-70% to-black w-auto p-10 justify-center md:flex-row"
        >
          <div className="flex flex-col items-center align-center content-center w-full md:flex-none md:w-fit ">
            <img
              className="rounded-xl w-fit mb-12 md:mb-0"
              src={`${InfoCardImgLink}${movieInfo.poster_path}`}
            />
          </div>
          <div className="flex text-center flex-col w-full items-center md:w-1/2 md:items-start pl-10">
            <div>
              <h1 className="text-4xl text-white font-bold">
                {movieInfo.original_name}{" "}
                <span className="text-gray-200 font-normal">
                  ({movieInfo.first_air_date.slice(0, 4)})
                </span>
              </h1>
            </div>

            <div className="">
              <span className="text-lg text-white font-bold bg-violet-500 inline-block rounded-lg px-1 m-1 my-3">
                {movieInfo.vote_average.toFixed(1)}/10
              </span>
              .
              <span className="font-semibold"> {movieInfo.first_air_date}</span>
              <span className="font-semibold flex flex-col">
                <span className="flex flex-wrap gap-2 text-sm">
                  {movieInfo.genres.map((genre: Genre) => {
                    return (
                      <span className="p-1 bg-blue-500 " key={genre.id}>
                        {genre.name}
                      </span>
                    );
                  })}
                </span>
              </span>
            </div>
            <div className="flex flew-row gap-2">
              <a
                href="#"
                className="w-10 text-lg text-white font-bold bg-black inline-block rounded-full p-2 m-1 mt-3"
              >
                <ListBulletIcon />
              </a>
              <a
                href="#"
                className="w-10 text-lg text-white font-bold bg-black inline-block rounded-full p-2 m-1 mt-3"
              >
                <BookmarkIcon />
              </a>

              <a
                href="#"
                className="w-10 text-lg text-white font-bold bg-black inline-block rounded-full p-2 m-1 mt-3"
              >
                <HeartIcon />
              </a>
            </div>
            <div>
              <span className="text-lg text-white italic text-gray-200 inline-block rounded-lg p-1 m-1 md:text-md">
                {movieInfo.tagline}
              </span>
            </div>
            <div>
              <span className="text-lg text-white text-gray-200 inline-block rounded-lg p-1 m-1 mt-1 font-semibold">
                Overview
              </span>
              <span className="text-md text-white text-gray-200 inline-block rounded-lg p-1 m-1 mt-1 text-wrap">
                {movieInfo.overview}
              </span>
            </div>
            {creator[0].id != 0 && (
              <div className="flex flex-row md:flex-col mt-7 ">
                <span className="text-lg text-white text-gray-200 inline px-1 mx-1  ">
                  Creator:
                </span>
                <span className="text-md text-white text-gray-200 inline px-1 mx-1 content-center text-wrap underline ">
                  <Link href={`/person/${creator[0].id}`}>
                    {creator[0].name}
                  </Link>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
