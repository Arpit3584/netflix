import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

 const useNowPlayingMovies=()=>
{

    const dispatch=useDispatch();
    const getNowPlayingMovies=async()=>
    {
    
      const data= await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?page=1',
        API_OPTIONS
      );
      const json=await data.json();
      console.log("json for movie recevied are",json);
      dispatch(addNowPlayingMovies(json.results));
    };
    useEffect(()=>
    { console.log("use effect called");
      getNowPlayingMovies();
    },[]);

}
export default useNowPlayingMovies;