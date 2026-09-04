import { GetPersonsWorks } from "@/app/lib/data"

export default async function KnownWorks(id:number) {
    const knownWorks = GetPersonsWorks(id);

    return (
        <div>

        </div>
    )
}