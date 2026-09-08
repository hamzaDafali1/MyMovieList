import { GetPersonsWorks } from "@/app/lib/data"

export default async function KnownWorks({ id }: { id: number }) {
  const knownWorks = await GetPersonsWorks(id);

    
  return (<div>
    <div>

    </div>
  </div>);
}