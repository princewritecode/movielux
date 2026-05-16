import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "./constant";
import { addPopularMovies } from "./movieSlice";

const usePopularMovies = () =>
{
    const dispatch = useDispatch();

    useEffect(() =>
    {
        const getPopularMovies = async () =>
        {
            try
            {
                const response = await fetch(
                    "https://api.themoviedb.org/3/movie/popular",
                    options
                );
                const json = await response.json();
                console.log(json);
                if (json?.results)
                {
                    dispatch(addPopularMovies(json.results));
                }
            } catch (error)
            {
                console.error("Failed to fetch Popular Movies:", error);
            }
        };

        getPopularMovies();
    }, [dispatch]);
};

export default usePopularMovies;