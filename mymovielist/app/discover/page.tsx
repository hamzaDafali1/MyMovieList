import SlideShow  from "../ui/discover/slideshow";
import Banner from "../ui/discover/banner";

export default function Page(){

   
//add the watching now slideshow later
    return (
      <div className="flex flex-col justify-center w-full items-center pt-20">
          <Banner />


        <div className="w-6/7 flex flex-col">
          <div>
            <h1 className="text-3xl">Popular Movies</h1>

            <SlideShow listName="popular" lang="en-US" type="movie" />
          </div>
          <div>
            <h1 className="text-3xl">Top Rated Movies</h1>

            <SlideShow listName="top_rated" lang="en-US" type="movie" />
          </div>
          <div>
            <h1 className="text-3xl">Popular TV Shows</h1>

            <SlideShow listName="popular" lang="en-US" type="serie" />
          </div>
        </div>
      </div>
    );
}