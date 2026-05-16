import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null
    },
    reducers: {
        addNowPlaying: (state, action) =>
        {
            state.nowPlayingMovies = action.payload;
        },

        addPopularMovies: (state, action) =>
        {
            state.popularMovies = action.payload;
        }

        ,
        addTrailerVideo: (state, action) =>
        {
            state.trailerVideo = action.payload;
        }
    }
});

export const { addNowPlaying, addTrailerVideo, addPopularMovies } = movieSlice.actions;
export default movieSlice.reducer;