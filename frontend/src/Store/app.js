// src/Store/app.js

import { configureStore } from '@reduxjs/toolkit';
import  shortUrlSlice  from '../Features/UrlSlice.js';

const store = configureStore({
  reducer: {
    Url: shortUrlSlice,
  },
});

export default store;
