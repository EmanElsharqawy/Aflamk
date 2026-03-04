import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

export const getTopMovies = createAsyncThunk(
 "Top_movies/getTopMovies",
  async (_, thunkAPI) => {
 const options2 = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/top_rated',
  params: {language: 'en-US', page: '55'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjUzNDNiOTQyNTAwNzA4N2NiNjA3OWE1MmM5ZDZkZiIsIm5iZiI6MTc2MzQ4OTAwMy40MjcsInN1YiI6IjY5MWNiNGViZGQzYjM3YzE2MDBkNWQwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.poD1hMCP4-vLi0mmeeW3Xp-2h0dJOgT003XvYuNPI70'
  }
};

    try {
      
       await new Promise((resolve) => setTimeout(resolve, 2000));
      const res = await axios.request(options2);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);


const Top_movies_Slice = createSlice({
  name: "topMovies",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getTopMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTopMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.results; // TMDB returns results[]
      })
      .addCase(getTopMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default Top_movies_Slice.reducer;
