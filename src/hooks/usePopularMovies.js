import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies, addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

 const usePopularMovies=()=>
{

    const dispatch=useDispatch();
    const getPopularMovies=async()=>
    {
    
      const data= await fetch(
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        API_OPTIONS
      );
      const json=await data.json();
      console.log("json for movie recevied are",json);
      dispatch(addPopularMovies(json.results));
    };
    useEffect(()=>
    { console.log("use effect called");
    getPopularMovies();
    },[]);

}
export default usePopularMovies;