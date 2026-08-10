import InfoCard from "@/app/ui/movie/infoCard";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  return (
    <div className="pt-25">
      <InfoCard movieId={id} />
    </div>
  );
}