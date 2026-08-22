import PersonalDetails from "@/app/ui/person/personalDetails";
import { GetPersonById } from "@/app/lib/data";
import { CastPersonMainImgLink } from "@/app/lib/globals";

export default async function Page(props: { params: Promise<{ id: number }> }){
    const params = await props.params;
    const id = params.id;
    const personInfo = await GetPersonById(id);

    return (
      <div className="flex flex-col items-center ">
        <div className="flex items-center flex-col w-full md:flex-row md:w-4/6 gap-5 md:items-start">
          <div>
            <img
              src={`${CastPersonMainImgLink}${personInfo.profile_path}`}
              alt={`${personInfo.name}`}
              className="w-fixed rounded-lg min-w-[250]"
            />
            <PersonalDetails id={id} />
          </div>
          <div className="overflow-scroll h-">{personInfo.biography}</div>
        </div>
      </div>
    );
};