import { configureStore } from '@reduxjs/toolkit';
import questionAnswerReducer from './slices/questionAnswerSlice';
import fileReducer from './slices/fileSlice';

const store = configureStore({
  reducer: {
    questionAnswer: questionAnswerReducer,
    file: fileReducer,
  },
});

export default store;
