import Link from "next/link";

export default function Footer(){
    return (
      <div className="flex flex-col items-center ">
        <div className="bg-blue-500 w-6/7 h-50 flex flex-row p-5 pl-30 ">
          <div className="flex flex-col border-l-2 pl-4 mr-30">
            <h4 className="text-lg font-semibold mb-2">Website</h4>
            <ul className="text-md">
              <li className="mb-1">
                <Link href="/discover">Discover</Link>
              </li>
              <li className="mb-1">
                <Link href="/movies">Movies</Link>
              </li>
              <li className="mb-1">
                <Link href="/series">Series</Link>
              </li>
              <li className="">
                <Link href="/actors">Actors</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col border-l-2 pl-4 mr-30">
            <h4 className="text-lg font-semibold mb-2">ABOUT</h4>
            <ul className="text-md">
              <li className="mb-1">
                <Link href="/discover">info</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col border-l-2 pl-4">
            <div className="text-md">
              <img className="w-15"
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
}