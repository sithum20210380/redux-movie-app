import { createSlice } from "@reduxjs/toolkit";

const initalState = {
    movies: [],
};

const movieSlice = createSlice({
    name: "Movies",
    initalState,
    reducers: {
        addMovies: (state, payload) => {
            state.movies = payload;
        },
    },
});

export const { addMovies } = movieSlice.actions;
export default movieSlice.reducer;