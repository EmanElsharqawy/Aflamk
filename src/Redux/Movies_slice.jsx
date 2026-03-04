import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";


export const getMovies_2 = createAsyncThunk(
 "Movies/getMovies2",
  async (page=1, thunkAPI) => {
const options4 = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/now_playing',
  params: {language: 'en-US', page: page},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjUzNDNiOTQyNTAwNzA4N2NiNjA3OWE1MmM5ZDZkZiIsIm5iZiI6MTc2MzQ4OTAwMy40MjcsInN1YiI6IjY5MWNiNGViZGQzYjM3YzE2MDBkNWQwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.poD1hMCP4-vLi0mmeeW3Xp-2h0dJOgT003XvYuNPI70'
  }
};

    try {
          await new Promise((resolve) => setTimeout(resolve, 2000));
      const res = await axios.request(options4);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
 export const getMoviesdetails = createAsyncThunk(
 "Movies/moviesdetails",
  async (movieId, thunkAPI) => {
    const optiondetails = {
  method: 'GET',
  url: `https://api.themoviedb.org/3/movie/${movieId}`,
  params: {language: 'en-US'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTU0NTA0ODhiMzYxNzk4NTdjN2M0NmViYmI3ZDU3MiIsIm5iZiI6MTc3MTQyNjQxNy4wLCJzdWIiOiI2OTk1ZDI3MGU2ODEzNjQwOTc5ZjgzNGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FYsWOQOMiC7dPs8uuM8qgsJ6JvAbnAsoqaWns9cZdxY'
  }

};

    try { 
      const res = await axios.request(optiondetails);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const getMoviescasting = createAsyncThunk(
 "Movies/moviescasting",
  async (movieId, thunkAPI) => {
   const moviecasting = {
  method: 'GET',
  url: `https://api.themoviedb.org/3/movie/${movieId}/credits`,
  params: {language: 'en-US'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTU0NTA0ODhiMzYxNzk4NTdjN2M0NmViYmI3ZDU3MiIsIm5iZiI6MTc3MTQyNjQxNy4wLCJzdWIiOiI2OTk1ZDI3MGU2ODEzNjQwOTc5ZjgzNGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FYsWOQOMiC7dPs8uuM8qgsJ6JvAbnAsoqaWns9cZdxY'
  }
};

    try { 
      const res = await axios.request(moviecasting);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);


export const getMoviestailler = createAsyncThunk(
 "Movies/moviestailer",
  async (movieId, thunkAPI) => {
   const movietailler = {
  method: 'GET',
  url: `https://api.themoviedb.org/3/movie/${movieId}/videos`,
     headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTU0NTA0ODhiMzYxNzk4NTdjN2M0NmViYmI3ZDU3MiIsIm5iZiI6MTc3MTQyNjQxNy4wLCJzdWIiOiI2OTk1ZDI3MGU2ODEzNjQwOTc5ZjgzNGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FYsWOQOMiC7dPs8uuM8qgsJ6JvAbnAsoqaWns9cZdxY'
  }
};

    try { 
      const res = await axios.request(movietailler);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);










export const getMovieimage = createAsyncThunk(
 "Movies/moviesimage",
  async (movieId, thunkAPI) => {
   const movieimage = {
  method: 'GET',
  url: `https://api.themoviedb.org/3/movie/${movieId}/images`,
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTU0NTA0ODhiMzYxNzk4NTdjN2M0NmViYmI3ZDU3MiIsIm5iZiI6MTc3MTQyNjQxNy4wLCJzdWIiOiI2OTk1ZDI3MGU2ODEzNjQwOTc5ZjgzNGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FYsWOQOMiC7dPs8uuM8qgsJ6JvAbnAsoqaWns9cZdxY'
  }
};

    try { 
      const res = await axios.request(movieimage );
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);




export const getMoviesrecommandation = createAsyncThunk(
 "Movies/moviesrecommendation",
  async (movieId, thunkAPI) => {
   const movierecomend = {
   method: 'GET',
  url: `https://api.themoviedb.org/3/movie/${movieId}/recommendations`,
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTU0NTA0ODhiMzYxNzk4NTdjN2M0NmViYmI3ZDU3MiIsIm5iZiI6MTc3MTQyNjQxNy4wLCJzdWIiOiI2OTk1ZDI3MGU2ODEzNjQwOTc5ZjgzNGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FYsWOQOMiC7dPs8uuM8qgsJ6JvAbnAsoqaWns9cZdxY'
  }
};

    try { 
      const res = await axios.request(movierecomend );
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);





export const getMoviessearch = createAsyncThunk(
  "Movies/moviessearch",
  async (query, thunkAPI) => {
    try {
      const res = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: { query, include_adult: 'false', language: 'en-US', page: 1 },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTU0NTA0ODhiMzYxNzk4NTdjN2M0NmViYmI3ZDU3MiIsIm5iZiI6MTc3MTQyNjQxNy4wLCJzdWIiOiI2OTk1ZDI3MGU2ODEzNjQwOTc5ZjgzNGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FYsWOQOMiC7dPs8uuM8qgsJ6JvAbnAsoqaWns9cZdxY'
        }
      });
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);





const movies_Slice_2 = createSlice({
  name: "Movies",
  initialState: {
    data: [],
    datadetails:[],
    moviecasting:[],
    movietailler:[],
    error: null,
    movieimage :null,
    movierecomend:[],
    isLoadingMovies: false,
    isLoadingDetails: false,
     moviesearch: { results: [] }
  },
 

 extraReducers: (builder) => {
    builder
      // ================= GET MOVIES =================
      .addCase(getMovies_2.pending, (state) => {
        state.isLoadingMovies = true;
      })
      .addCase(getMovies_2.fulfilled, (state, action) => {
        state.isLoadingMovies = false;
        state.data = action.payload.results;
      })
      .addCase(getMovies_2.rejected, (state, action) => {
        state.isLoadingMovies = false;
        state.error = action.payload;
      })

      // ================= MOVIE DETAILS =================
      .addCase(getMoviesdetails.pending, (state) => {
        state.isLoadingDetails = true;
      })
      .addCase(getMoviesdetails.fulfilled, (state, action) => {
        state.isLoadingDetails = false;
        state.datadetails = action.payload;
      })
      .addCase(getMoviesdetails.rejected, (state, action) => {
        state.isLoadingDetails = false;
        state.error = action.payload;
      })

      // ================= CASTING =================
      .addCase(getMoviescasting.pending, (state) => {
        state.isLoadingCasting = true;
      })
      .addCase(getMoviescasting.fulfilled, (state, action) => {
        state.isLoadingCasting = false;
        state.moviecasting = action.payload;
      })
      .addCase(getMoviescasting.rejected, (state, action) => {
        state.isLoadingCasting = false;
        state.error = action.payload;
      })

      // ================= TRAILER =================
      .addCase(getMoviestailler.pending, (state) => {
        state.isLoadingTrailer = true;
      })
      .addCase(getMoviestailler.fulfilled, (state, action) => {
        state.isLoadingTrailer = false;
        state.movietailler = action.payload;
      })
      .addCase(getMoviestailler.rejected, (state, action) => {
        state.isLoadingTrailer = false;
        state.error = action.payload;
      })

      // ================= IMAGES =================
      .addCase(getMovieimage.pending, (state) => {
        state.isLoadingImages = true;
      })
      .addCase(getMovieimage.fulfilled, (state, action) => {
        state.isLoadingImages = false;
        state.movieimage = action.payload;
      })
      .addCase(getMovieimage.rejected, (state, action) => {
        state.isLoadingImages = false;
        state.error = action.payload;
      })

      // ================= RECOMMEND =================
      .addCase(getMoviesrecommandation.pending, (state) => {
        state.isLoadingRecommend = true;
      })
      .addCase(getMoviesrecommandation.fulfilled, (state, action) => {
        state.isLoadingRecommend = false;
        state.movierecomend = action.payload;
      })
      .addCase(getMoviesrecommandation.rejected, (state, action) => {
        state.isLoadingRecommend = false;
        state.error = action.payload;
      })

      
      // ================= search =================
      .addCase(getMoviessearch.pending, (state) => {
        state.isLoadingRecommend = true;
      })
      .addCase(getMoviessearch.fulfilled, (state, action) => {
        state. moviesearch  = action.payload;
   

      })
      .addCase(getMoviessearch.rejected, (state, action) => {
        
        state.error = action.payload;
      });

  },
});
export default movies_Slice_2.reducer;
