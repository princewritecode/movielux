import Header from "./Header";
import useNowPlayingMovies from "../utils/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../utils/usePopularMovies";

import Gptsearch from "./Gptsearch";
const Browse = () =>
{

    useNowPlayingMovies();
    usePopularMovies();
    return (
        <>
            <Header value={true}></Header>
            <Gptsearch></Gptsearch>
            <MainContainer></MainContainer>
            <SecondaryContainer></SecondaryContainer>
        </>
    );
};
export default Browse;