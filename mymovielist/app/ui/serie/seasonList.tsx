import { GetSeasonInfo, GetSerieById } from "@/app/lib/data";
import { Serie, SerieEpisode } from "@/app/lib/definitions";
import Link from "next/link";

export default async function SeasonList({ id, nbrSeasons }: { id: number; nbrSeasons:number }) {
  const seasons = await GetSeasonInfo(id, nbrSeasons);
 
  

  return (
    <div className="w-full shadow-lg shadow-violet-500 border-t-2 border-violet-500 rounded-lg p-2">
      <div>
        <div className="flex flex-col gap-3">
          {seasons.map((season) => {
            return (
              <div
                className="flex flex-row gap-2 p-4 border-b-2 justify-start"
                key={season.id}
              >
                <div className="w-[130]">
                  <Link href={`/serie/${id}/season/${season.season_number}`}>
                    <img
                      className="min-w-[130]"
                      src={`https://media.themoviedb.org/t/p/w130_and_h195_face/${season.poster_path}`}
                    />
                  </Link>
                </div>
                <div className="flex flex-col px-5 gap-2">
                  <div className="">
                    <h1 className="text-xl text-white font-bold">
                      <Link
                        href={`/serie/${id}/season/${season.season_number}`}
                      >
                        {season.name}
                      </Link>{" "}
                      <span className="text-gray-200 font-normal">
                        ({season.air_date})
                      </span>
                    </h1>
                    <h1 className="text-sm text-white font-bold">
                      Number of episodes: {season.episodes.length}
                    </h1>
                  </div>
                  <div className="text-md text-pretty">{season.overview}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div></div>
    </div>
  );
}

