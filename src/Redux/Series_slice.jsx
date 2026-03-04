

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSeries2 = createAsyncThunk(
  "Series/getSeries2",
  async (page = 1, thunkAPI) => {
    const options5 = {
      method: "GET",
      url: "https://api.themoviedb.org/3/tv/top_rated",
      params: { language: "en-US", page: page },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjUzNDNiOTQyNTAwNzA4N2NiNjA3OWE1MmM5ZDZkZiIsIm5iZiI6MTc2MzQ4OTAwMy40MjcsInN1YiI6IjY5MWNiNGViZGQzYjM3YzE2MDBkNWQwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.poD1hMCP4-vLi0mmeeW3Xp-2h0dJOgT003XvYuNPI70",
      },
    };

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); 
      const res = await axios.request(options5);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

 export const getseriesdetails = createAsyncThunk(
 "series/seriesdetails",
  async (seriesid, thunkAPI) => {
const seriesdetails = {
  method: 'GET',
  url: `https://api.themoviedb.org/3/tv/${seriesid}`,
  params: {language: 'en-US'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTU0NTA0ODhiMzYxNzk4NTdjN2M0NmViYmI3ZDU3MiIsIm5iZiI6MTc3MTQyNjQxNy4wLCJzdWIiOiI2OTk1ZDI3MGU2ODEzNjQwOTc5ZjgzNGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FYsWOQOMiC7dPs8uuM8qgsJ6JvAbnAsoqaWns9cZdxY'
  }
};

    try { 
   
      const res = await axios.request(seriesdetails);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);


export const getseriescasting = createAsyncThunk(
  "series/seriescasting",
  async (seriesid, thunkAPI) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/tv/${seriesid}/credits`,
        {
          params: { language: "en-US" },
          headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTU0NTA0ODhiMzYxNzk4NTdjN2M0NmViYmI3ZDU3MiIsIm5iZiI6MTc3MTQyNjQxNy4wLCJzdWIiOiI2OTk1ZDI3MGU2ODEzNjQwOTc5ZjgzNGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FYsWOQOMiC7dPs8uuM8qgsJ6JvAbnAsoqaWns9cZdxY",
          },
        }
      );
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);




 export const getseriestailler = createAsyncThunk(
 "series/seriestailler",
  async (seriesid, thunkAPI) => {
const seriestailler = {
  method: 'GET',
  url: `https://api.themoviedb.org/3/tv/${seriesid}/videos`,
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTU0NTA0ODhiMzYxNzk4NTdjN2M0NmViYmI3ZDU3MiIsIm5iZiI6MTc3MTQyNjQxNy4wLCJzdWIiOiI2OTk1ZDI3MGU2ODEzNjQwOTc5ZjgzNGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FYsWOQOMiC7dPs8uuM8qgsJ6JvAbnAsoqaWns9cZdxY'
  }
};

    try { 
   
      const res = await axios.request(seriestailler);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);





export const getseriesimage = createAsyncThunk(
 "series/seriesimage",
  async (seriesid, thunkAPI) => {
  const seriesimage = {
  method: 'GET',
  url: `https://api.themoviedb.org/3/tv/${seriesid}/season/season_number/images`,
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTU0NTA0ODhiMzYxNzk4NTdjN2M0NmViYmI3ZDU3MiIsIm5iZiI6MTc3MTQyNjQxNy4wLCJzdWIiOiI2OTk1ZDI3MGU2ODEzNjQwOTc5ZjgzNGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FYsWOQOMiC7dPs8uuM8qgsJ6JvAbnAsoqaWns9cZdxY'
  }
};

    try { 
   
      const res = await axios.request(seriesimage);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);




export const getseriesrecommend = createAsyncThunk(
 "series/seriesrecommend",
  async (seriesid, thunkAPI) => {
  const seriesrecommend = {
  method: 'GET',
  url: `https://api.themoviedb.org/3/tv/${seriesid}/recommendations`,
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTU0NTA0ODhiMzYxNzk4NTdjN2M0NmViYmI3ZDU3MiIsIm5iZiI6MTc3MTQyNjQxNy4wLCJzdWIiOiI2OTk1ZDI3MGU2ODEzNjQwOTc5ZjgzNGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FYsWOQOMiC7dPs8uuM8qgsJ6JvAbnAsoqaWns9cZdxY'
  }
};

    try { 
   
      const res = await axios.request(seriesrecommend);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);



export const getseriessearch = createAsyncThunk(
 "series/seriessearch",
  async (query, thunkAPI) => {
  const seriessearch = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/search/tv',
  params: {query:query, include_adult: 'false', language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTU0NTA0ODhiMzYxNzk4NTdjN2M0NmViYmI3ZDU3MiIsIm5iZiI6MTc3MTQyNjQxNy4wLCJzdWIiOiI2OTk1ZDI3MGU2ODEzNjQwOTc5ZjgzNGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FYsWOQOMiC7dPs8uuM8qgsJ6JvAbnAsoqaWns9cZdxY'
  }
};

    try { 
   
      const res = await axios.request( seriessearch);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);













const seriesSlice = createSlice({
  name: "Series",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
    seriesdata:[],
    seriescasting:[],
    seriestailler:null,
    seriesimage:null,
    seriesrecommend:null,
    seriessearch:[],
  },

  extraReducers: (builder) => {
    builder
      .addCase(getSeries2.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSeries2.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.results; 
      })
      .addCase(getSeries2.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
       builder
      .addCase(getseriesdetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getseriesdetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.seriesdata = action.payload; 
      })
      .addCase(getseriesdetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
       builder
      .addCase(getseriescasting.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getseriescasting.fulfilled, (state, action) => {
        state.isLoading = false;
        state.seriescasting = action.payload; 
      })
      .addCase(getseriescasting.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });


       builder
      .addCase(getseriestailler.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getseriestailler.fulfilled, (state, action) => {
        state.seriestailler= action.payload; 
      })
      .addCase(getseriestailler.rejected, (state, action) => {
        state.error = action.payload;
      });



      builder
      .addCase(getseriesimage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getseriesimage.fulfilled, (state, action) => {
        state.seriesimage= action.payload; 
      })
      .addCase(getseriesimage.rejected, (state, action) => {
        state.error = action.payload;
      });


      builder
      .addCase(getseriesrecommend.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getseriesrecommend.fulfilled, (state, action) => {
        state.seriesrecommend= action.payload; 
      })
      .addCase(getseriesrecommend.rejected, (state, action) => {
        state.error = action.payload;
      });


       builder
      .addCase(getseriessearch.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getseriessearch.fulfilled, (state, action) => {
       state.seriessearch = action.payload.results;
      })
      .addCase(getseriessearch.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default seriesSlice.reducer;
