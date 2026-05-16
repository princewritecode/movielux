
const MovieCard = ({ posterPath, title }) =>
{
    // Elegant fallback image placeholder if TMDB doesn't provide a poster asset
    if (!posterPath) return null;

    const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w500";

    return (
        /*
          - flex-shrink-0: Essential to stop flexbox from collapsing images horizontally
          - aspect-[2/3]: Perfect standard Hollywood movie poster dimensions
          - hover:scale-105: Smooth, modern physical elevation feedback
        */
        <div className="w-28 sm:w-36 md:w-44 lg:w-48 flex-shrink-0 cursor-pointer relative group rounded-md overflow-hidden transition-all duration-400 ease-out hover:scale-105 shadow-md hover:shadow-2xl hover:shadow-black/50">
            <img
                className="w-full h-full object-cover rounded-md transform backface-hidden"
                src={`${IMAGE_CDN_URL}${posterPath}`}
                alt={`${title} Poster`}
                loading="lazy" // Performance optimization for deep scrolling horizontal lists
            />

            {/*
              Cinematic Hover Overlay Sheet:
              Fades a subtle dark gradient outline into view over the image upon item hover,
              prepping the layout area for text display or dynamic interactive targets.
            */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-xs font-bold text-white line-clamp-2 md:text-sm drop-shadow-md">
                    {title}
                </span>
            </div>
        </div>
    );
};

export default MovieCard;