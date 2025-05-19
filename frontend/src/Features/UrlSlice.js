import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getShortUrl, posttUrl } from "./UrlService";


// 🔗 POST: Create Short URL
export const generateShortUrl = createAsyncThunk(
  "shortUrl/generate",
  async (urlData, { rejectWithValue }) => {
    try {
      const response = await posttUrl(urlData);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error creating short URL");
    }
  }
);

// 🔁 GET: Fetch Full URL
export const fetchOriginalUrl = createAsyncThunk(
  "shortUrl/fetch",
  async (shortCode, { rejectWithValue }) => {
    try {
      const response = await getShortUrl(shortCode);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching original URL");
    }
  }
);

 const shortUrlSlice = createSlice({
  name: "shortUrl",
  initialState: {
    urlLoading: false,
    shortUrl: null,
    originalUrl: null,
    urlError: false,
  },
  reducers: {
    resetShortUrlState: (state) => {
      state.shortUrl = null;
      state.originalUrl = null;
      state.error = null;
      state.loading = false;
    }
  },
  extraReducers: (builder) => {
    builder
      // generateShortUrl
      .addCase(generateShortUrl.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(generateShortUrl.fulfilled, (state, action) => {
        state.loading = false;
        state.shortUrl = action.payload;
      })
      .addCase(generateShortUrl.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // fetchOriginalUrl
      .addCase(fetchOriginalUrl.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOriginalUrl.fulfilled, (state, action) => {
        state.loading = false;
        state.originalUrl = action.payload;
      })
      .addCase(fetchOriginalUrl.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { resetShortUrlState } = shortUrlSlice.actions;
export default shortUrlSlice.reducer;
