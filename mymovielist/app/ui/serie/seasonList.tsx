import { GetSeasonInfo, GetSerieById } from "@/app/lib/data";
import { Serie, SerieEpisode } from "@/app/lib/definitions";

export default async function SeasonList({ id, nbrSeasons }: { id: number; nbrSeasons:number }) {
  const seasons = await GetSeasonInfo(id, nbrSeasons);
  

  return (
    <div className="w-full border p-2">
      <div>
        <div className="flex flex-col gap-3">
          {seasons.map((season) => {
            return (
              <div
                className="flex flex-row gap-2 p-2 border-b-2 justify-start"
                key={season.id}
              >
                <div className="w-max">
                  <img
                    className="w-full"
                    src={`https://media.themoviedb.org/t/p/w130_and_h195_face/${season.poster_path}`}
                  />
                </div>
                <div className="flex flex-col w-fit px-5">
                  <div className="">
                    <h1 className="text-xl text-white font-bold">
                      {season.name}{" "}
                      <span className="text-gray-200 font-normal">
                        ({season.air_date})
                      </span>
                    </h1>
                  </div>
                  <div className="text-sm text-wrap">{season.overview}</div>
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

