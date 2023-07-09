import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import {APIkey} from '../../common/apis/movieApiKey';
import movieApi from '../../common/apis/movieApi';

const Home = () => {
    const movieText = 'harry'
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await movieApi
            .get(`?apiKey=${APIkey}&s=${movieText}&type=movie`)
            .catch((err) => {
                console.log('Err: ', err);
            });
            console.log('The response from API ', response)
        };
        fetchMovies();
    }, []);

    return ( 
        <div>
            <div className="banner-img">
                <MovieListing />
            </div>
        </div>
     );
}
 
export default Home;