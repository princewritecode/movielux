import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "./constant";
import { addNowPlaying } from "./movieSlice";

const useNowPlayingMovies = () =>
{
    const dispatch = useDispatch();

    useEffect(() =>
    {
        const getNowPlayingMovies = async () =>
        {
            try
            {
                const response = await fetch(
                    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
                    options
                );
                const json = await response.json();
                console.log(json, 'now playing');
                // Safely dispatch the results array to the Redux store
                if (json?.results)
                {
                    dispatch(addNowPlaying(json.results));
                }
            } catch (error)
            {
                console.error("Failed to fetch Now Playing Movies:", error);
            }
        };

        getNowPlayingMovies();
    }, [dispatch]); // Safeguards hook dependency lint rules
};

export default useNowPlayingMovies;