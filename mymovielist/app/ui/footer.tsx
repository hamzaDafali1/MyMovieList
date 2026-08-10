import Link from "next/link";

export default function Footer(){
    return (
      <div className="flex flex-col items-center ">
        <div className="bg-blue-500 w-6/7 h-50 flex flex-row p-5">
          <div>
            <h4>Website</h4>
            <ul>
              <li>
                <Link href="/discover">Discover</Link>
              </li>
              <li>
                <Link href="/movies">Movies</Link>
              </li>
              <li>
                <Link href="/series">Series</Link>
              </li>
              <li>
                <Link href="/actors">Actors</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}