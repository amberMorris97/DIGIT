import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchToken } from '../redux/actions/spotifyApiActions';
import Home from './Home.jsx';

const App = () => {
  const dispatch = useDispatch();

  useEffect(async() => {
    dispatch(fetchToken());
  }, []);

  return (<Home />)
}

export default App;