// src/Redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./cursor_slice";
import seriesReducer from "./Series_slice";
import TopMoviesReducer from "./Top_movies_slice";
import TopSeriesReducer from "./Top_series_slice";
import moviesSlice2 from "./Movies_slice";
import seriescursor from "./series_curser_slice"



const store = configureStore({
  reducer: {
    movies: movieReducer,
    topMovies: TopMoviesReducer,
    TopSeries: TopSeriesReducer,
    Movies_2: moviesSlice2,
   Series : seriesReducer,
    seriescursor,
   

  },
});

export default store;
