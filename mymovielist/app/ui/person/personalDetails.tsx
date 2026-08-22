import { GetPersonById } from "@/app/lib/data"
import {CastPersonMainImgLink} from "@/app/lib/globals"

export default async function PersonalDetails({id}: {id: number}){
    const personInfo = await GetPersonById(id);

    return (
      <div>
        <div>

        </div>
        <div>
            
        </div>
      </div>
    );
}