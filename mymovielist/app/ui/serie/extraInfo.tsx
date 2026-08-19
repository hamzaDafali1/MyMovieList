import { GetSerieById } from "@/app/lib/data";
import { Genre } from "@/app/lib/definitions";

export default async function ExtraInfo({ movieId }: { movieId: number }) {
  const extrainfo = await GetSerieById(movieId);

  /*status: string;
  budget: number;
  original_language: string;
  revenue: number;
  genres: string[];*/
  console.log(extrainfo.spoken_languages);
  

  return (
    <div className="h-full w-full">
      <div className="h-full w-full">
        <ul className="flex flex-row gap-5 w-full md:flex-col">
          <li>
            <h3 className="font-semibold text-lg">Status</h3>
            <p>{extrainfo.status}</p>
          </li>
          <li>
            <h3 className="font-semibold text-lg">Number of Seasons</h3>
            <p>{extrainfo.number_of_seasons}</p>
          </li>
          {extrainfo.spoken_languages[0] && (
            <li>
              <h3 className="font-semibold text-lg">Language</h3>
              <p>
                {extrainfo.spoken_languages
                  ? extrainfo.spoken_languages[0].name
                  : ""}
              </p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}