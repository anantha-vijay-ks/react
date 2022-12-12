import React from "react";
import Movie from '../Movie';
import {MovieContext} from '../moviecontext';
const MovieList=()=>{
    const [movie,setMovies]=useContext(MovieContext);
    return(
        <div>
            {MovieList.map((movies)=>(
                <Movie name={movies.name}price={movies}key={movie.id}/>
            ))}
        </div>
    )
}
export default MovieList