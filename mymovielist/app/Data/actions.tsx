

export async function GetMovieById(id : string){
   try{
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
        headers: {
            Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`,
            accept: "application/json"
        },
    });
        const data = await response.json();

        return data;

    }catch(error){
        return error;
    }

}

export async function GetLatestMovies(){
    try{
        const response = await fetch(`https://api.themoviedb.org/3/movie/latest`, {
        headers: {
            Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`,
            accept: "application/json"
        },
    });
        const data = await response.json();

        return data;

    }catch(error){
        return error;
    }
}