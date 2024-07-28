import axios from 'axios';

export const submitArtist = async (formData) => {
  try {
    const response = await axios.post('/waitlist/submit', formData, {
      headers: { 'Content-Type': 'application/json'},
    });
    console.log(response)
    return response.data;
  } catch (error) {
    console.log(error)
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || 'Error submitting artist');
    } else {
      throw new Error('Error submitting artist');
    }
  }
};