import useMovieStore from "../../store/movies";
import MovieCard from "./MovieCard";


const MovieDisplay = () => {
    const { movies, ApiStatus } = useMovieStore();

    const isLoading = ApiStatus === 'pending';

    console.log('Movies in store:',
      movies
    );
    

  return (  
     <div className="flex flex-wrap justify-center gap-4 p-4 my=[2em]">
        {movies.length > 0 ? (movies.map((movie, idx) => {
            <MovieCard 
            Title={movie.Title} 
            Year={movie.Year} 
            Genre={movie.Genre} 
            Director={movie.Director} 
            Actors={movie.Actors} 
            Poster={movie.Poster} 
            imdbRating={movie.imdbRating}
            key = {idx}
            />;
        }) )

     : isLoading ? ( <p>fetching your movie details</p> 

    ) : (
        <p>No movies found.</p>
        )
    }
    </div>
  );

};
  


export default MovieDisplay