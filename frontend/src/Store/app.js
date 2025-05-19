// src/Store/app.js

import { configureStore } from '@reduxjs/toolkit';
import { shortUrlSlice } from '../Features/UrlSlice';

const store = configureStore({
  reducer: {
    shortUrl: shortUrlSlice,
  },
});

export default store;
