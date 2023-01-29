import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setPrimaryArtist,
  setArtistOne,
  setArtistTwo,
  setArtistThree,
  fetchToken } from '../redux/actions/spotifyApiActions';
import DisplayArtists from './DisplayArtists.jsx';
import Selections from './Selections.jsx';
import axios from 'axios';

const Home = () => {
  const dispatch = useDispatch();

  const [artistName, setArtistName] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const token = useSelector(state => state.spotifyApiReducer.token);
  const primaryArtist = useSelector(state => state.spotifyApiReducer.primaryArtist);
  const artistOne = useSelector(state => state.spotifyApiReducer.artistOne);
  const artistTwo = useSelector(state => state.spotifyApiReducer.artistTwo);
  const artistThree = useSelector(state => state.spotifyApiReducer.artistThree);

  useEffect(async() => {
    dispatch(fetchToken());
  }, []);

  const clearSearchResults = () => {
    setArtistName('');
    setSearchResults([]);
  }

  const handleOnChange = async (e) => {
    const { name, value } = e.target;

    if (name === 'artist') {
      setArtistName(value);
    };

    if (value.length < 3) {
      setSearchResults([]);
    };

    let results;
    if (value.length > 3) {
      try {
        results = await axios.get(`/search/?artist=${value}&token=${token}`);
      } catch (e) {
        throw new Error(e);
      }
    };

    if (results) {
      setSearchResults([...results.data.artists.items]);
    };
  }

  const handleSelect = (e, img, url) => {
    e.preventDefault();

    const { id } = e.target;
    const data = { id, img, url };

    if (data) {
      clearSearchResults();

      if (!primaryArtist.id) {
        dispatch(setPrimaryArtist(data));
        return;
      }

      if (!artistOne.id) {
        dispatch(setArtistOne(data));
        return;
      }

      if (!artistTwo.id) {
        dispatch(setArtistTwo(data));
        return;
      }

      if (!artistThree.id) {
        dispatch(setArtistThree(data));
        return;
      }
    }

  }

  return (
    <div>
      {primaryArtist.id && <Selections primaryArtist={primaryArtist} />}
      {!primaryArtist.id ? <h1>choose primary artist</h1> : <h1>choose another artist</h1>}
        <input type="text" value={artistName} name="artist" onChange={handleOnChange} />
        <DisplayArtists artists={searchResults} handleSelect={handleSelect} />
    </div>
  );
}

export default Home;