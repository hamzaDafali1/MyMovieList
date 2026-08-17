import CastSlideShow from "@/app/ui/serie/castslideshow";
import InfoCard from "@/app/ui/serie/infoCard";
import ExtraInfo from "@/app/ui/serie/extraInfo";

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
          <ExtraInfo movieId={id} />
        </div>
      </div>
    </div>
  );
}