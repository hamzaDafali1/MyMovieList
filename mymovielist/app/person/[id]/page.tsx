import PersonalDetails from "@/app/ui/person/personalDetails";
import AboutPerson from "@/app/ui/person/aboutPerson";
import { GetPersonById } from "@/app/lib/data";
import { CastPersonMainImgLink } from "@/app/lib/globals";

export default async function Page(props: { params: Promise<{ id: number }> }){
    const params = await props.params;
    const id = params.id;
    const personInfo = await GetPersonById(id);

    return (
      <div className="flex flex-col items-center py-5">
        <div className="flex items-center flex-col w-full md:flex-row md:w-4/6 gap-5 md:items-start">
          <div>
            <PersonalDetails id={id} />
          </div>
          <div>
            <AboutPerson id={id} />
          </div>
        </div>
      </div>
    );
};