import { useState, useEffect } from 'react';

const Header = () =>
{
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() =>
    {
        const handleScroll = () =>
        {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 z-50 flex w-full items-center justify-between px-6 py-4 transition-all duration-700 lg:px-16 lg:py-6 ${isScrolled
                ? 'bg-[#141414]/95 backdrop-blur-md border-b border-white/10'
                : 'bg-transparent bg-gradient-to-b from-black/90 via-black/40 to-transparent'
                }`}
        >
            {/* Left Side: Logo Only */}
            <div className="flex items-center">
                <h1 className="cursor-pointer text-3xl font-extrabold tracking-tighter text-[#E50914] transition-transform duration-300 hover:scale-105 md:text-4xl">
                    MOVIELUX
                </h1>
            </div>

            {/* Right Side: Language & Sign In */}
            <div className="flex items-center space-x-3 md:space-x-6">

                {/* Optional Language Selector (Modern Look) */}
                <div className="relative hidden sm:block">
                    <select className="appearance-none bg-black/30 border border-gray-500 text-white text-sm py-1.5 pl-8 pr-4 rounded-md focus:outline-none focus:ring-1 focus:ring-white transition cursor-pointer">
                        <option>English</option>
                        <option>हिन्दी</option>
                    </select>
                    <div className="absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" />
                        </svg>
                    </div>
                </div>

                {/* The "Best Ever" CTA Button */}
                <button className="bg-[#E50914] text-white text-sm font-semibold px-5 py-1.5 rounded-md hover:bg-[#c10712] transition-all duration-200 shadow-lg active:scale-95 md:px-6 md:py-2 md:text-base">
                    Sign In
                </button>
            </div>
        </header>
    );
};

export default Header;