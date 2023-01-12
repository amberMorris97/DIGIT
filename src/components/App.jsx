import React, { useState, useEffect } from 'react';
import ArtistForm from './ArtistForm.jsx';
import axios from 'axios';
import apiHandler from './helpers/api';

const App = () => {
  const [accessToken, setAccessToken] = useState('');

  useEffect(async() => {
    const token = await apiHandler.fetchToken();

    setAccessToken(token);
  }, []);

  return (<ArtistForm />)
}

export default App;