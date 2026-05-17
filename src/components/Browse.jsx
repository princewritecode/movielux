import Header from "./Header";
import useNowPlayingMovies from "../utils/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../utils/usePopularMovies";
import { useSelector } from "react-redux";
import Gptsearch from "./Gptsearch";
const Browse = () =>
{
    const showGptSearch = useSelector(state => state.gpt.showGptSearch);
    console.log(showGptSearch, 'showgpt search inbrowse');


    useNowPlayingMovies();
    usePopularMovies();
    return (
        <>
            <Header value={true}></Header>
            {showGptSearch ? <Gptsearch></Gptsearch> :
                <>
                    <MainContainer></MainContainer>
                    <SecondaryContainer></SecondaryContainer>
                </>}
        </>
    );
};
export default Browse;