import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";



export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async (_, thunkAPI) => {
  const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/popular',
  params: {language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjUzNDNiOTQyNTAwNzA4N2NiNjA3OWE1MmM5ZDZkZiIsIm5iZiI6MTc2MzQ4OTAwMy40MjcsInN1YiI6IjY5MWNiNGViZGQzYjM3YzE2MDBkNWQwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.poD1hMCP4-vLi0mmeeW3Xp-2h0dJOgT003XvYuNPI70'
  }};
    try {
       await new Promise((resolve) => setTimeout(resolve, 2000));
      const res = await axios.request(options);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);


const movieSlice = createSlice({
  name: "movies",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.results; // TMDB returns results[]
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default movieSlice.reducer;
