
const VideoTitle = ({ title, overview }) =>
{


    return (
        <div className="absolute z-10 w-full h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 text-white bg-gradient-to-r from-black via-black/60 to-transparent pt-[12%] md:pt-[8%]">


            <div className="flex items-center gap-2 mb-4 animate-fade-in">
                <span className="bg-red-600 text-[10px] md:text-xs font-black px-2 py-0.5 rounded tracking-wider uppercase">
                    Trending
                </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tight uppercase max-w-4xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] leading-none font-sans">
                {title}
            </h1>


            <p className="hidden md:inline-block text-sm md:text-base lg:text-lg mt-6 w-1/2 md:w-5/12 text-gray-300/90 drop-shadow-md font-medium leading-relaxed line-clamp-3">
                {overview}
            </p>


            <div className="flex gap-4 mt-8 items-center">


                <button className="flex items-center justify-center gap-3 bg-white text-black font-bold px-6 py-2.5 md:px-8 md:py-3.5 rounded-md text-sm md:text-lg transition-all duration-300 hover:bg-white/80 active:scale-95 shadow-2xl hover:shadow-white/10">
                    <svg className="w-5 h-5 md:w-6 md:h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                    Play
                </button>


                <button className="flex items-center justify-center gap-3 bg-gray-500/20 text-white backdrop-blur-md border border-gray-500/30 font-bold px-6 py-2.5 md:px-8 md:py-3.5 rounded-md text-sm md:text-lg transition-all duration-300 hover:bg-gray-500/40 active:scale-95 shadow-2xl">
                    <svg className="w-5 h-5 md:w-6 md:h-6 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 111.063 1.06l-.041.02a.75.75 0 01-1.063-1.06zm0 0v6M12 9h.008v.008H12V9zm9.303 3.376c-.866 1.502-2.006 2.753-3.42 3.755m3.42-3.755a9 9 0 11-15.547-6.376M21.303 12.376A8.962 8.962 0 0112 21a8.962 8.962 0 01-9.303-8.624M12 3c3.18 0 6.052 1.65 7.722 4.153" />
                    </svg>
                    More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;