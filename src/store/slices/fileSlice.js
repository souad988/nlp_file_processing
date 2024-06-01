import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { initializeQAndA } from './questionAnswerSlice';

// Retrieve data from local storage or set default empty values
const localData = JSON.parse(localStorage.getItem('fileData')) || {
  file: null,
};
const { REACT_APP_BACKEND_URL } = process.env;

// Async Thunk to upload a document
export const uploadFile = createAsyncThunk('file/uploadFile', async (file, { dispatch, rejectWithValue }) => {
  const formData = new FormData();
  formData.append('file', file);
  try {
    const response = await axios.post(`${REACT_APP_BACKEND_URL}/uploadfile`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    // Initialize messages to [] to start a new conversation
    dispatch(initializeQAndA());
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      return rejectWithValue({ message: error.response.data.error });
    }
    // Return a generic error message if no response data is available
    return rejectWithValue({ message: 'An unknown error occurred' });
  }
});

// Create a slice for managing document-related state
const fileSlice = createSlice({
  name: 'file',
  initialState: {
    file: localData.file, // Holds uploaded document data
    loading: false, // Indicates if actions are in progress
    error: null, // Holds error information if any action fails
    status: 'idle', // Represents the current status of actions (idle/loading/succeeded/failed)
  },
  reducers: {}, // No additional reducers defined
  extraReducers: (builder) => {
    builder
      .addCase(uploadFile.pending, (state) => {
        // Update state when document upload action starts
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(uploadFile.fulfilled, (state, action) => {
        // Update localStorage when document upload action succeeds
        const data = {
          file: action.payload.file,
          questions: [],
          answers: [],
        };
        localStorage.setItem('fileData', JSON.stringify(
          {
            ...localData,
            ...data,
          },
        ));
        toast.success(`Upload Successful: ${action.payload.file.filename} successfully uploaded!!`);
        return {
          ...state,
          ...data,
          loading: false,
          status: 'succeeded',
        };
      })
      .addCase(uploadFile.rejected, (state, action) => {
        // Update state when document upload action fails
        const errorMessage = action.payload?.message || 'Upload Failed';
        toast.error(`Upload Failed: ${errorMessage}!!`);
        return {
          ...state,
          loading: false,
          status: 'failed',
          error: errorMessage,
        };
      });
  },
});

export default fileSlice.reducer;
