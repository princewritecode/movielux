import { useEffect } from "react";
import { options } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const VideoBackground = ({ movieId }) =>
{

    const dispatch = useDispatch();
    const trailerVideo = useSelector((state) => state?.movies?.trailerVideo);

    useEffect(() =>
    {
        if (!movieId) return;

        const fetchMovieDetails = async () =>
        {
            try
            {
                const movieInfo = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieId}/videos`,
                    options
                );
                const movieMoreInfo = await movieInfo.json();


                const trailers = movieMoreInfo?.results?.filter((video) => video.type === "Trailer") || [];
                const movieTrailer = trailers.length ? trailers[0] : movieMoreInfo?.results?.[0];

                if (movieTrailer)
                {
                    dispatch(addTrailerVideo(movieTrailer));
                }
            } catch (error)
            {
                console.error("Error loading background cinematic track:", error);
            }
        };

        fetchMovieDetails();
    }, [movieId, dispatch]);


    if (!trailerVideo?.key) return <div className="w-screen h-screen bg-black" />;

    const trailerKey = trailerVideo.key;

    return (

        <div className="absolute top-0 left-0 w-screen h-screen z-0 bg-black overflow-hidden select-none">


            <iframe
                className="w-full h-full object-cover scale-150 md:scale-135 aspect-video pointer-events-none"
                src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${trailerKey}&iv_load_policy=3&modestbranding=1&disablekb=1`}
                title="Cinematic Studio Presentation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
            />


            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
        </div>
    );
};

export default VideoBackground;