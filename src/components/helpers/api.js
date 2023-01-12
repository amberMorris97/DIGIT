const axios = require('axios');

const submitArtist = async (artist, genre, url) => {
  const body = { artist, genre, url };

  const dataSent = await axios.post('/add', { body });

  console.log(dataSent);
};

export default submitArtist;