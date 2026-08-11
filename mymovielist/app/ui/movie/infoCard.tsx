import { GetMovieById } from "@/app/lib/data";
import { InfoCardImgLink, BackdropImgLink } from "@/app/lib/globals";

export default async function infoCard({ movieId }: { movieId: string }) {
  const movieInfo = await GetMovieById(movieId);

  return (
    <div
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movieInfo.backdrop_path})`,
      }}
      className="flex flex-row bg-cover "
    >
      <div className="flex flex-row bg-radial from-[#303030]/70 from-70% to-black w-full p-10">
        <div className="w-2/7">
          <img
            className="rounded-xl"
            src={`${InfoCardImgLink}${movieInfo.poster_path}`}
          />
        </div>
        <div className="flex flex-col w-5/7 pl-15 pt-5">
          <div>
            <h1 className="text-4xl text-white font-bold">
              {movieInfo.original_title} ({movieInfo.release_date.slice(0, 4)})
            </h1>
          </div>
          <div>
            <span className="text-xl text-white font-bold bg-violet-500 inline-block rounded-lg p-1 m-1">
              {movieInfo.vote_average.toFixed(2)}/10
            </span>
            <span> {movieInfo.release_date} . </span>
          </div>
        </div>
      </div>
    </div>
  );
}