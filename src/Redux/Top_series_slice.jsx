import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTopSeries = createAsyncThunk(
  "TopSeries/getTopSeries",
  async (_, thunkAPI) => {
 const options3 = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/tv/top_rated',
  params: {language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjUzNDNiOTQyNTAwNzA4N2NiNjA3OWE1MmM5ZDZkZiIsIm5iZiI6MTc2MzQ4OTAwMy40MjcsInN1YiI6IjY5MWNiNGViZGQzYjM3YzE2MDBkNWQwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.poD1hMCP4-vLi0mmeeW3Xp-2h0dJOgT003XvYuNPI70'
  }
    };

    try {
      
       await new Promise((resolve) => setTimeout(resolve, 2000));
      const res = await axios.request(options3);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const Top_Series_Slice = createSlice({
  name: "TopSeries",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getTopSeries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTopSeries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.results;
      })
      .addCase(getTopSeries.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default Top_Series_Slice.reducer;
