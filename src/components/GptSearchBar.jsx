import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () =>
{
    const searchText = useRef(null);
    const dispatch = useDispatch();

    const handleSearchSubmit = async (e) =>
    {
        e.preventDefault();
        const query = searchText.current.value;
        if (!query) return;

        console.log("Simulating AI Search for:", query);

        try
        {

            const gptMoviesText = "Inception, Interstellar, The Matrix, Shutter Island, Arrival";
            const movieNamesArray = gptMoviesText.split(",").map(movie => movie.trim());

            dispatch(addGptMovieResult(movieNamesArray));
        } catch (error)
        {
            console.error("API Failure:", error.message);
        }
    };

    return (
        <div className="pt-10 flex flex-col items-center w-full gap-4">
            <form
                onSubmit={handleSearchSubmit}
                className="w-full md:w-2/3 lg:w-1/2 bg-zinc-900/60 backdrop-blur-md grid grid-cols-12 p-2 md:p-3 rounded-xl border border-zinc-800 shadow-2xl transition-all duration-300 focus-within:border-red-600/40 focus-within:shadow-[0_0_25px_rgba(229,9,20,0.15)]"
            >
                <div className="col-span-9 relative flex items-center">
                    <svg className="absolute left-4 w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        ref={searchText}
                        type="text"
                        className="w-full bg-zinc-950/50 text-white text-sm md:text-base pl-11 pr-4 py-3 rounded-lg outline-none placeholder-zinc-500"
                        placeholder="What kind of movie do you want to watch?"
                    />
                </div>
                <button type="submit" className="col-span-3 ml-2 md:ml-3 bg-[#E50914] text-white font-semibold text-sm md:text-base rounded-lg hover:bg-[#c10712] transition-all flex items-center justify-center gap-1">
                    <span>Search</span>
                </button>
            </form>

            {/* AI LIMIT NOTICE BANNER */}
            <div className="w-full md:w-2/3 lg:w-1/2 bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 flex items-center gap-3 text-amber-200 text-xs md:text-sm">
                <span className="text-base">⚠️</span>
                <p>
                    <strong className="text-amber-400">OpenAI API Quota Limit Reached (429):</strong> The live AI service is temporarily paused. The system is currently operating in <span className="underline decoration-amber-500/50 font-semibold">Demo Mode</span> using simulated search results.
                </p>
            </div>
        </div>
    );
};

export default GptSearchBar;