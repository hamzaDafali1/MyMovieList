import Link from "next/link";
import {Cog6ToothIcon, MagnifyingGlassIcon} from "@heroicons/react/24/outline"


export default function NavBar(){
    return (
      <div className="fixed flex flex-col justify-center z-10">
        <div className=" flex flex-row text-white w-screen bg-linear-to-br from-violet-500 to-blue-500 py-3 text-md justify-center items-center h-16 font-bold">
          <img
            className="mr-20 w-10 "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/960px-Google_Favicon_2025.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
          />
          <div className=" w-5/7">
            <Link className="mr-10" href="/discover">
              Discover
            </Link>
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
          <div className="flex flex-row items-center ">
            <span>
              <Cog6ToothIcon className="w-7 py-1 mr-5" />
            </span>
            <span>
              <img
                src="https://i.imgur.com/2LOHFFU.png"
                alt="Profile"
                className="w-10 rounded-full"
              />
            </span>
          </div>
        </div>
        <div className="flex flex-row justify-center bg-white">
          <MagnifyingGlassIcon className="w-5 text-blue-500" />
          <form className="w-4/6 bg-white">
            <input
              className=" px-5 py-1 w-6/7  text-blue-500"
              type="text"
              placeholder="Search for movies, series and actors"
            />
            <input
              className="border px-auto py-1 text-white bg-blue-500 font-medium w-1/7 align-center"
              type="submit"
              value="Search"
            />
          </form>
        </div>
      </div>
    );
}