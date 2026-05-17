import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) =>
{
    if (!movies || movies.length === 0) return null;
    return (
        <div className="space-y-3 md:space-y-4">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold tracking-wide text-white/90 font-sans select-none drop-shadow-md">
                {title}
            </h2>
            <div className="flex overflow-x-scroll overflow-y-hidden gap-4 pb-4 pt-2 scroll-smooth no-scrollbar select-none">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        posterPath={movie.poster_path}
                        title={movie.title}
                    />
                ))}
            </div>
            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};
export default MovieList;