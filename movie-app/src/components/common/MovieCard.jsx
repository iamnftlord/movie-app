import React from 'react'

const MovieCard = (props) =>  {
    const {Title, Year, Genre, Director, Actors, Poster, imdbRating} = props;


  return <div className='border p-4 rounded shadow-md max-w-sm flex flex-col items-center'>
    <img src={Poster} alt={`Poster for ${Title}`} />
    <h2>{Title} - ({Year})</h2>
    <div className='flex items-center justify-between'>
        <p><strong>Genre:</strong> {Genre}</p>
        <p><strong>IMDB Rating:</strong> {imdbRating}</p>

    </div>
    <p><strong>Director:</strong> {Director}</p>
    <p><strong>Actors:</strong> {Actors}</p>
  </div>
  
}

export default MovieCard