import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://dummyjson.com/auth/login', credentials);
      
      localStorage.setItem('adminToken', response.data.accessToken);
      localStorage.setItem('userImage', response.data.image);
      localStorage.setItem('isAdmin', 'true');
      
      return response.data; 
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Login Failed');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: localStorage.getItem('adminToken'),
    image: localStorage.getItem('userImage'),
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      localStorage.clear();
      state.user = null;
      state.token = null;
      state.image = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.accessToken;
        state.image = action.payload.image;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;