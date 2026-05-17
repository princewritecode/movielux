const MovieCard = ({ posterPath, title }) =>
{
    if (!posterPath) return null;
    const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w500";
    return (
        <div className="w-28 sm:w-36 md:w-44 lg:w-48 flex-shrink-0 cursor-pointer relative group rounded-md overflow-hidden transition-all duration-400 ease-out hover:scale-105 shadow-md hover:shadow-2xl hover:shadow-black/50">
            <img
                className="w-full h-full object-cover rounded-md transform backface-hidden"
                src={`${IMAGE_CDN_URL}${posterPath}`}
                alt={`${title} Poster`}
                loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-xs font-bold text-white line-clamp-2 md:text-sm drop-shadow-md">
                    {title}
                </span>
            </div>
        </div>
    );
};

export default MovieCard;