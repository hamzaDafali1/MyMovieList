import { GetMovieById } from "@/app/lib/data";
import { Genre } from "@/app/lib/definitions";

export default async function ExtraInfo({ movieId }: { movieId: number }) {
  const extrainfo = await GetMovieById(movieId);

  /*status: string;
  budget: number;
  original_language: string;
  revenue: number;
  genres: string[];*/

  return (
    <div className="h-full w-full">
      <div className="h-full w-full">
        <ul className="flex flex-col gap-5 w-full">
          <li>
            <h3 className="font-semibold text-lg">Status</h3>
            <p>{extrainfo.status}</p>
          </li>
          <li>
            <h3 className="font-semibold text-lg">Language</h3>
            <p>{extrainfo.spoken_languages[0].name}</p>
          </li>
          <li>
            <h3 className="font-semibold text-lg">Genres</h3>
            <p className="flex flex-wrap gap-2">
              {extrainfo.genres.map((genre: Genre) => {
                return (
                  <span className="p-1 bg-blue-500 " key={genre.id}>
                    {genre.name}
                  </span>
                );
              })}
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-lg">budget</h3>
            <p>{extrainfo.budget}$</p>
          </li>
          <li>
            <h3 className="font-semibold text-lg">revenue</h3>
            <p>{extrainfo.revenue}$</p>
          </li>
        </ul>
      </div>
    </div>
  );
}