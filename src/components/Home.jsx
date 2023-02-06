import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
  setPrimaryArtist,
  addArtist,
  fetchToken } from '../redux/actions/spotifyApiActions';
import Search from './Search.jsx';
import DisplayArtists from './DisplayArtists.jsx';
import Selections from './Selections.jsx';

const Home = () => {
  const dispatch = useDispatch();

  const [artistName, setArtistName] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const primaryArtist = useSelector(state => state.spotifyApiReducer.primaryArtist);

  useEffect(async() => {
    dispatch(fetchToken());
  }, []);

  return (
    <div>
      {primaryArtist.id && <Selections primaryArtist={primaryArtist} />}
      {!primaryArtist.id ? <h1>choose primary artist</h1> : <h1>choose another artist</h1>}
      <Search />
    </div>
  );
};

export default Home;