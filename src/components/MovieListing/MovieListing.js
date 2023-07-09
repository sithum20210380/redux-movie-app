import React from 'react';
import { UseSelector, useSelector } from 'react-redux';
import { getAllMovies } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';

const MovieListing = () => {
    const movies = useSelector(getAllMovies);
    let renderMovies = "";
    //console.log(movies);
    renderMovies = movies.Response === "True" ? (
        movies.Search.map((movie, index) => {
            <MovieCard key={index} data= {movie}/>
        })
    ) : (
        <div className='movie-error'><h3>{movies.Error}</h3></div>
    );
    return 
        <div>
            MovieListing
        </div>
     
}
 
export default MovieListing;