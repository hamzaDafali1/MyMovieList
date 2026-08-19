import { GetSeasonInfo, GetSerieById } from "@/app/lib/data";
import { SeasonCard } from "@/app/ui/cards";
import Link from "next/link";

export default async function SeasonList({ id, nbrSeasons }: { id: number; nbrSeasons:number }) {
  const seasons = await GetSeasonInfo(id, nbrSeasons);
 
  

  return (
    <div className="w-full shadow-lg shadow-violet-500 border-t-2 border-violet-500 rounded-lg p-2">
      <div>
        <div className="flex flex-col gap-3">
          {seasons.map((season) => {
            return <SeasonCard seasonInfo={season} id={id} key={season.id} />;
          })}
        </div>
      </div>
      <div></div>
    </div>
  );
}

