import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './slices/greetingsSlice';
import fileReducer from './slices/fileSlice';

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
    file: fileReducer,
  },
});

export default store;
