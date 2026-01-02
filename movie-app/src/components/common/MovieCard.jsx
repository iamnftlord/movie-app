import React from 'react';
import { useNavigate } from 'react-router';


const MovieCard = (props) =>  {
    const {Title, Year, Genre, Director, Actors, Poster, imdbRating, imdbID } = props;

  const navigate = useNavigate();

    console.log('MovieCard Props:', props);
  
  return <div className='border p-4 rounded shadow-md max-w-sm flex flex-col items-center'>
    <img src={Poster} alt={`Poster for ${Title}`} />
    <h2>{Title} - ({Year})</h2>
    <div className='flex flex-col items-between justify-center'>
        {Genre && <p>
          <strong>Genre:</strong> {Genre}
        </p>}
        {imdbRating && <p>
          <strong>IMDB Rating:</strong> {imdbRating}
        </p>}

    </div>
    {Director && <p>
      <strong>Director:</strong> {Director}
    </p>}
    {Actors && <p>
      <strong>Actors:</strong> {Actors}
    </p>}
    <button onClick={() => navigate(`/movie/${imdbID}`)} className='mt-4 px-4 py-2 bg-slate-700 text-white rounded-3xl hover:bg-slate-900 cursor-pointer'>
      View Details
    </button>
  </div>
  
}

export default MovieCard