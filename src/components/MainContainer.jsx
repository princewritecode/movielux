import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () =>
{
    const movies = useSelector((state) => state.movies?.nowPlayingMovies);
    if (movies === null)
    {
        return (
            <div className="h-screen w-screen bg-black flex items-center justify-center">
                <div className="animate-pulse text-gray-400 text-xl font-medium tracking-widest">
                    LOADING CINEMATIC EXPERIENCE...
                </div>
            </div>
        );
    }
    const mainMovie = movies[0];
    const { original_title, overview, id } = mainMovie;
    console.log(id);
    return (
        <div className="relative h-screen w-screen bg-black overflow-hidden select-none">
            <VideoTitle title={original_title} overview={overview || "No description available."} />
            <VideoBackground movieId={id} />
        </div>
    );
};

export default MainContainer;