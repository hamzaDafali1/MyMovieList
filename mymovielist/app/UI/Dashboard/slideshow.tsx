import { GetLatestMovies } from "@/app/Data/actions";
import Card from "../card";


export default async function SlideShow(){
    const latestmovies = await GetLatestMovies();


    return (
       <div className="flex flex-left w-screen align-center content-center h-fit overflow-scroll mt-7">
        {latestmovies.map((movie) => {
            return (
            <div  key={movie.id}>
                <Card movieinfo={movie} />
            </div>
            )
        })}
       </div>
    )
}