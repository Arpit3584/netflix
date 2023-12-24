
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
    const movies=useSelector((store)=>store.movies);
    console.log("now playing movies are",movies);

  return (
   
    <div className='bg-black '>
        <div className='-mt-55 pl-12 relative z-50'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
        <MovieList title={"Suggested Movies"} movies={movies.nowPlayingMovies}/>
        </div>
        </div>
  )
}

export default SecondaryContainer