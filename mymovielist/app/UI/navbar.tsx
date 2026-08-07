import Link from "next/link";
import {Cog6ToothIcon} from "@heroicons/react/24/outline"


export default function NavBar(){
    return (
        <div className="fixed flex flex-row bg-blue-500 w-screen text-white-100 py-3 text-md justify-center items-center h-16">
            <img className="mr-20 w-10 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/960px-Google_Favicon_2025.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" />
            <div className=" w-2/7">
                <Link className="mr-10" href="/movies">
                    Movies
                </Link>
                <Link className="mr-10" href="/series">
                    Series
                </Link>
                <Link className="" href="/series">
                    Actors
                </Link>
            </div>
            <form className="w-3/7">
                <input className="border px-5 py-1 mr-1 w-3/5" type="text" placeholder="Search for movies, series and actors" />
                <input className="border px-5 py-1 bg-white text-blue-500 mr-20 font-medium" type="submit" value="Search"/>
            </form>
            <div className="flex flex-row items-center ">
                <span><Cog6ToothIcon className="w-7 py-1 mr-5"/></span>
                <span><img src="https://i.imgur.com/2LOHFFU.png" alt="Profile" className="w-10 rounded-full" /></span>
            </div>
        </div>
    )
}