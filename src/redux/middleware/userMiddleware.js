import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const checkUserRegistrationStatus = async (email) => {
//   try {
//     const response = await axios.get(`/users/fetchUser?email=${email}`);
//     return response.data; // Returns user data if user is registered, null otherwise
//   } catch (error) {
//     throw error;
//   }
// };

const fetchUser = createAsyncThunk(
  'users/fetchUser',
  async (email, thunkAPI) => {
    try {
      const response = await axios.get(`/users/fetchUser?email=${email}`);

      if (response.data.user) return user;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // thunkAPI.dispatch(registerUser(email));
        window.location.href = '/registration';
      }
      throw error;
    }
  }
);

// Thunk action creator for fetching user data
const registerUser = createAsyncThunk(
  'users/register',
  async () => {
    try {
      const response = await axios.post('/users/');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export { fetchUser, registerUser };