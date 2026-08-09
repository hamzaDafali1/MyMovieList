
import Card from "../UI/card";
import SlideShow from "../UI/Dashboard/slideshow";

export default function Page(){

   
//
    return (
        <div className="flex flex-col justify-center w-screen align-center content-center pt-25">
        <div>
            <h1 className="text-4xl">
            The Latest Trending Movies 
            </h1>

            <SlideShow />

            </div>
       </div>
    )
}