
import { SlideShow } from "../UI/Dashboard/slideshow";

export default function Page(){

   
//
    return (
      <div className="flex flex-col justify-center w-full align-center content-center pt-20">
        <div>
          <h1 className="text-4xl">Popular Movies</h1>

          <SlideShow listName="popular" lang="en-US" type="movie" />
        </div>
        <div>
          <h1 className="text-4xl">Top Rated English Movies</h1>

          <SlideShow listName="top_rated" lang="en-US" type="movie" />
        </div>
        <div>
          <h1 className="text-4xl">Top Rated English Movies</h1>
          
          <SlideShow listName="popular" lang="en-US" type="serie" />
        </div>
      </div>
    );
}