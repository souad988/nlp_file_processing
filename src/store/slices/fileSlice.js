import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

// Retrieve data from local storage or set default empty values
const localData = JSON.parse(localStorage.getItem('fileData')) || {
  file: null,
};
const { REACT_APP_BACKEND_URL } = process.env;

// Async Thunk to upload a document
export const uploadFile = createAsyncThunk('file/uploadFile', async (file) => {
  console.log('env', REACT_APP_BACKEND_URL);
  const formData = new FormData();
  formData.append('file', file);

  // Upload the document using Axios POST request
  const response = await axios.post(`${REACT_APP_BACKEND_URL}/uploadfile`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
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
        console.log('actions', action.payload);
        localStorage.setItem('fileData', JSON.stringify(
          {
            ...localData,
            file: action.payload,
            questions: [],
            answers: [],
          },
        ));
        toast.success(`Upload Successful: ${action.payload.filename} successfully uploaded!!`);
        return {
          ...state,
          loading: false,
          status: 'succeeded',
          file: action.payload,
        };
      })
      .addCase(uploadFile.rejected, (state, action) => {
        // Update state when document upload action fails
        toast.error(`Upload Failed: ${action.error.message}!!`);
        return {
          ...state,
          loading: false,
          status: 'failed',
          error: action.error.message,
        };
      });
  },
});

export default fileSlice.reducer;
