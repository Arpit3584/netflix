import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  
  return (
    <div classname='px-6 bg-black'>
        <h1 className='text-2xl  py-4 text-white'>{title}</h1>
        <div className='flex no-scrollbar overflow-x-scroll'>
            
        <div className='flex'>
            {movies&&
            movies.map((movie)=>
            (
        <MovieCard key={movie.id} posterPath={movie.poster_path}/>
            )
            )}
        
        </div>
        </div>
    </div>
  );
};

export default MovieList