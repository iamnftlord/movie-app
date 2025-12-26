import useMovieStore from "../store/movies";
import {envVars} from '../config'
import { set } from "lodash";

export const fetchMovies = async () => {
    const { searchTerm, updateMoviesList, 
        movies, setApiStatus, ApiStatus } = 
        useMovieStore.getState();
        
        if (ApiStatus === 'pending') {
            return;
        }

    try {
        setApiStatus('pending');

        const response = await fetch(
            `http://www.omdbapi.com/?apiKey=$
            {envVars.OMDBApiKey}&s=$
            {encodeURIComponent(
            searchTerm
            )}`
        );

    const data = await response.json();

    if (data.Response === "True") {
        updateMoviesList([...useMovieStore.data]);
        setApiStatus('success')
        
    } else {
        setApiStatus('failure')
        throw new Error('something went wrong while fetching the movie');
    }

    return data;

    } catch(e) {
        setApiStatus('failure')
        console.error('failed to fetch movies', e);
    }

};