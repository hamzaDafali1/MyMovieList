import { GetPersonById } from "@/app/lib/data";
import { PersonInfo } from "@/app/lib/definitions";

export default async function AboutPerson({id}: {id:number}){
    const personInfo = await GetPersonById(id);

    return (
      <div>
        <div className="flex flex-col gap-4">
          <div className="text-5xl font-semibold">{personInfo.name}</div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl">Biography</h1>
            <input
              type="checkbox"
              className="checked:h-fit"
              name="bio"
              id="bio"
            />
            <label id="lbl" className="" htmlFor="bio">
              <p className="text-md overflow-hidden">{personInfo.biography}</p>
              {personInfo.biography.length > 400 &&
                <span className="mt-1 font-semibold cursor-pointer">
                  read more...
                </span>
              }
            </label>
          </div>
        </div>
      </div>
    );
}