import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { GetMovieById } from "../Data/actions";
import { Movie } from "@/app/Data/definitions";
import Link from "next/link";

export default async function Card({ movieinfo }: { movieinfo: Movie }){


    return (
        <div className="flex flex-col items-center gap-6 rounded-2xl  w-fit rounded-none text-md mr-5 h-100 ">
            <Link href={`/movies/${movieinfo.id}`}>
        <div className="flex flex-col w-[160]">
            <div className="relative">
                <span className=" font-semibold text-sm text-white bg-blue-500 rounded-lg p-1 my-2 mx-28 absolute ">{movieinfo.
release_date.slice(0, 4)}</span>
                <img className="w-[160] rounded-lg" src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movieinfo.poster_path}`} />
             
                </div>
            <div className="flex flex-col  py-9 px-1">
                <h1 className="text-xl">{movieinfo.original_title}</h1>
                <div className="flex gap-2 font-medium text-blue-500 dark:text-blue-500 gap-y-8">
                    
                    <span className="">{movieinfo.
vote_average.toFixed(2)}/10 . </span>
                    <span className="">{movieinfo.original_language.toUpperCase()}</span>
                </div>
            </div>
        </div></Link>
        </div>
    )
}

