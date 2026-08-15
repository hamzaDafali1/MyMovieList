import CastSlideShow from "@/app/ui/movie/castslideshow";
import InfoCard from "@/app/ui/movie/infoCard";

export default async function Page(props: { params: Promise<{ id: number }> }) {
  const params = await props.params;
  const id = params.id;

  return (
    <div className="flex flex-col pt-25 items-center">
      <div>
        <InfoCard movieId={id} />
      </div>
      <div className="flex flex-col items-center md:flex-row justify-center w-full md:w-4/6">
        <div className="flex flex-col p-5 gap-4 w-full lg:w-2/3">
          <h5 className="text-3xl flex flex-left w-fit">Cast</h5>
          <CastSlideShow id={id} />
        </div>






        <div className="flex flex-col w-1/2 pl-10">
          <div>
            <h1 className="text-4xl text-white font-bold">
              qsdsq
              <span className="text-gray-200 font-normal">qsdqsd</span>
            </h1>
          </div>

          <div>
            <span className="text-lg text-white font-bold bg-violet-500 inline-block rounded-lg p-1 m-1 mt-3">
              qsdq
            </span>
            <span className="font-semibold">sqddfs</span>
          </div>
          <div className="flex flew-row gap-2">
            <a
              href="#"
              className="w-10 text-lg text-white font-bold bg-black inline-block rounded-full p-2 m-1 mt-3"
            ></a>
            <a
              href="#"
              className="w-10 text-lg text-white font-bold bg-black inline-block rounded-full p-2 m-1 mt-3"
            ></a>

            <a
              href="#"
              className="w-10 text-lg text-white font-bold bg-black inline-block rounded-full p-2 m-1 mt-3"
            ></a>
          </div>
          <div>
            <span className="text-lg text-white italic text-gray-200 inline-block rounded-lg p-1 m-1 ">
              qsddsff
            </span>
          </div>
          <div>
            <span className="text-lg text-white text-gray-200 inline-block rounded-lg p-1 m-1 mt-3">
              Overview
            </span>
            <span className="text-md text-white text-gray-200 inline-block rounded-lg p-1 m-1 mt-3 text-wrap">
              qsdsf
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}