import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gptSlice',
    initialState: {
        showGptSearch: false,
        movieNames: null // 1. Added state to store your movie names array
    },
    reducers: {
        toggleGptSearchView: (state) =>
        {
            state.showGptSearch = !state.showGptSearch;
        },
        // 2. Added the missing reducer function that your SearchBar needs!
        addGptMovieResult: (state, action) =>
        {
            state.movieNames = action.payload;
        }
    }
});

// 3. Make sure to export it here so other files can import it!
export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;