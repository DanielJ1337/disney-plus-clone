import { createSlice } from "@reduxjs/toolkit";

// we need to define an initial state which is created when the app is started

const initialState = {
  movies: [],
};

// then we'll create a slice from it which
// Redux consist of different ideas which are called
// * Actions
// * Reducers
// * State

// so, always when I want to define a certain behaviour of a certain component inside of the app
// it needs the correct props or parameters to work with
// if I wanted to solve this problem with simple React it would end in props drilling
// ! the parameter gets pushed through all the different areas of the components which results in a pretty big mess
// with Actions, State, and Reducers all data is basically stored in a structure which can be imagined as a kind of
// market where all components that need data can choose between the different information

// * Actions call Reducers, and the Reducers basically change the state

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectMovies = (state) => state.movie.movies;

export default movieSlice.reducer;
