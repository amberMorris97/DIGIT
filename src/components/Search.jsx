import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, InputLabel, Button } from '@mui/material'
import {
  setPrimaryArtist,
  addArtist,
  updatePrimaryArtist,
  removeArtist } from '../redux/actions/spotifyApiActions';
import DisplayArtists from './DisplayArtists.jsx';
import { verifyPrimaryArtist, isDuplicate } from './helpers/verify';
import { ARTIST_TOO_POPULAR, ARTIST_DUPLICATE } from './helpers/errors';
import axios from 'axios';

const Search = ({ view, count, setCount }) => {
  const dispatch = useDispatch();

  const [artistName, setArtistName] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const checkDupe = useRef(false);
  const primaryArtistValid = useRef(true);

  const token = useSelector(state => state.spotifyApiReducer.token);
  const primaryArtist = useSelector(state => state.spotifyApiReducer.primaryArtist);
  const artists = useSelector(state => state.spotifyApiReducer.artists);
  const userStep = useSelector(state => state.spotifyApiReducer.userStep);

  const clearSearchResults = () => {
    setArtistName('');
    setSearchResults([]);
  }

  const handleOnChange = async (e) => {
    primaryArtistValid.current = true;
    checkDupe.current = false;

    const { name, value } = e.target;

    if (name === 'artist') {
      setArtistName(value);
    };

    if (value.length < 1) {
      setSearchResults([]);
    };

    let results;
    if (value.length > 1) {
      try {
        results = await axios.get(`/search/?artist=${value}&token=${token}`);
      } catch (e) {
        throw new Error(e);
      }
    };

    if (results) {
      setSearchResults([...results.data.artists.items]);
    };

    console.log(searchResults)
  }

  const handleSelect = (e, id, img, url, popularity, uri, name) => {
    e.preventDefault();

    const data = { id, img, url, uri, name };

    /** checks for valid selections */
    const verify = verifyPrimaryArtist(popularity);
    const isDupe = isDuplicate(primaryArtist, artists, id);

    primaryArtistValid.current = true;
    checkDupe.current = false;

    const verifyAndSet = () => {
      if (verify && !primaryArtist.id) {
        dispatch(setPrimaryArtist(data));

      } else if (view !== 'matching') {
        if (verify && primaryArtist.id) {
          dispatch(updatePrimaryArtist(data));

        } else if (!verify) {
          primaryArtistValid.current = false;
        }
      }
    }

    if (data) {
      clearSearchResults();

      verifyAndSet();

      if (isDupe) {
        checkDupe.current = true;
        return;
      }

      if (view === 'matching') {
        dispatch(addArtist(data));

        setCount();
      }
    }
  }

  const searchInput = (
    <Input
      id="spotify-search"
      name="artist"
      aria-describedby="spotify-search-helper-text"
      onChange={handleOnChange}
      value={artistName}
    />);

  return (
    <div className="search-bar-container">
      {artists.length < 4 && view !== 'matching'
          && artists.length < 1 && <InputLabel htmlFor="name">Search for the artist you want to feature</InputLabel>}
        {searchInput}
      {!primaryArtistValid.current && artists.length <= 0 && <span className="error">{ARTIST_TOO_POPULAR}</span>}
      {checkDupe.current && <span className="error">{ARTIST_DUPLICATE}</span>}

      {searchResults[0] &&  <DisplayArtists topResult={searchResults[0]} artists={searchResults} handleSelect={handleSelect} />}
    </div>
  );
};

export default Search;