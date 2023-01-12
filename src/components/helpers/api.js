const axios = require('axios');

const apiHandler = {
  submitArtist: async (artist, genre, url) => {
    const body = { artist, genre, url };

    const dataSent = await axios.post('/add', { body });

    console.log(dataSent);
  },

  // fetching spotify token required for client interaction
  fetchToken: async () => {
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

    const authParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }

    const response = await fetch('https://accounts.spotify.com/api/token', authParams);
    const data = await response.json();
    const token = data.access_token;

    return token;
    }
};

export default apiHandler;