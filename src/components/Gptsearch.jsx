import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const Gptsearch = () =>
{
    return (
        <div className="relative min-h-screen w-full bg-zinc-950 overflow-x-hidden pb-12">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-red-900/10 via-transparent to-transparent pointer-events-none z-0" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4">

                <div className="text-center pt-24 md:pt-32 space-y-3">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
                        AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E50914] to-amber-500">Movie Scout</span>
                    </h1>
                    <p className="text-zinc-400 text-sm md:text-base max-w-md mx-auto font-normal">
                        Describe what you want to watch, and let AI discover your next favorite film.
                    </p>
                </div>


                <GptSearchBar />
                <GptMovieSuggestion />
            </div>
        </div>
    );
};

export default Gptsearch;