import { createSlice } from "@reduxjs/toolkit";

const initalState = {
    movies: {},
};

const movieSlice = createSlice({
    name: "movies",
    initalState,
    reducers: {
        addMovies: (state, payload) => {
            state.movies = payload;
        },
    },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export default movieSlice.reducer;