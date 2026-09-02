import { GetPersonById } from "@/app/lib/data"
import {CastPersonMainImgLink, Genders} from "@/app/lib/globals"
import { PersonInfo } from "@/app/lib/definitions";

export default async function PersonalDetails({id}: {id: number}){
    const personInfo: PersonInfo = await GetPersonById(id);

    return (
      <div className="flex flex-col gap-1 bg-linear-to-bl from-violet-500 to-blue-500 rounded-lg">
        <div>
          <div>
            <img
              src={`${CastPersonMainImgLink}${personInfo.profile_path}`}
              alt={`${personInfo.name}`}
              className="w-fixed rounded-lg min-w-[250]"
            />
          </div>
        </div>
        <div className="mt-4 px-3 pb-5">
          <h1 className="text-2xl font-semibold">Personal Info</h1>
          <ul className="mt-3 flex flex-col gap-3">
            <li>
              <p className="font-semibold">Known For:</p>
              <p className="">{personInfo.known_for_department}</p>
            </li>
            <li>
              <p className="font-semibold">Gender</p>
              <p className="">{Genders[personInfo.gender]}</p>
            </li>
            <li>
              <p className="font-semibold">Date of Birth</p>
              <p className="">{personInfo.birthday.replaceAll("-", "/")}</p>
            </li>
            {personInfo.deathday && (
              <li>
                <p className="font-semibold">Date of Death</p>
                <p className="">{personInfo.deathday.replaceAll("-", "/")}</p>
              </li>
            )}
            <li>
              <p className="font-semibold">Place of Birth</p>
              <p className="">{personInfo.place_of_birth}</p>
            </li>
            <li>
              <p className="font-semibold">Also Known As:</p>
              <p className="flex flex-col">
                {personInfo.also_known_as.map((alias) => {
                  return (
                    <span key={personInfo.also_known_as.indexOf(alias)}>
                      {alias}
                    </span>
                  );
                })}
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
}