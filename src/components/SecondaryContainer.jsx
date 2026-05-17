
import MovieList from './MovieList';
import { useSelector } from 'react-redux';
const SecondaryContainer = () =>
{
    const movies = useSelector((state) => state.movies);
    if (!movies?.nowPlayingMovies) return null;
    return (
        <div className="bg-neutral-900 w-screen text-white pb-12">
            <div className="relative z-30 px-4 md:px-12 -mt-16 md:-mt-32 lg:-mt-44 space-y-8 md:space-y-12">
                <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
                <MovieList title="Popular" movies={movies.popularMovies} />
            </div>
        </div>
    );
};
export default SecondaryContainer;