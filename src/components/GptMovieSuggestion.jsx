import React from 'react';
import { useSelector } from 'react-redux';

const GptMovieSuggestion = () =>
{
    // Dynamically tracking the slice's array state via Redux hook
    const movieNames = useSelector((store) => store.gpt.movieNames);

    // If no search action has been performed yet, render nothing safely
    if (!movieNames) return null;

    return (
        <div className="mt-12 bg-zinc-900/30 backdrop-blur-md rounded-xl border border-zinc-900/80 p-4 md:p-6 shadow-2xl animate-fade-in">
            <div className="mb-4 border-b border-zinc-800/60 pb-3">
                <h2 className="text-lg md:text-xl font-bold text-zinc-100 tracking-wide flex items-center gap-2">
                    <span className="text-red-500">✨</span> AI Recommendations
                </h2>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {movieNames.map((movieName, index) => (
                    <div
                        key={index}
                        className="group bg-zinc-900/90 p-5 rounded-lg border border-zinc-800/80 hover:border-red-600/30 hover:bg-zinc-900 transition-all duration-300 shadow-md cursor-pointer flex flex-col justify-between min-h-[130px]"
                    >
                        <h3 className="text-base font-semibold text-zinc-200 group-hover:text-white transition-colors duration-200 line-clamp-2">
                            {movieName}
                        </h3>

                        <div className="mt-4 flex justify-between items-center text-xs text-zinc-500 font-medium border-t border-zinc-800/40 pt-2">
                            <span className="bg-zinc-800 px-2 py-0.5 rounded text-[10px] text-zinc-400">Movie</span>
                            <span className="text-zinc-400 group-hover:text-red-500 transition-colors duration-200">Details →</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GptMovieSuggestion;