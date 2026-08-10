import { GetMovieById } from "@/app/lib/data";
import { InfoCardImgLink } from "@/app/lib/globals";

export default async function infoCard({ movieId }: { movieId: string }) {
  const movieInfo = await GetMovieById(movieId);

  return (
    <div>
      <div>
        <img src={`${InfoCardImgLink}${movieInfo.poster_path}`} />
      </div>
      <h1>{movieId}</h1>
    </div>
  );
}