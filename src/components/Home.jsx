import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPrimaryArtist } from '../redux/actions/spotifyApiActions';
import DisplayArtists from './DisplayArtists.jsx';
import axios from 'axios';

const Home = () => {
  const dispatch = useDispatch();
  const [artistName, setArtistName] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  const token = useSelector(state => state.spotifyApiReducer.token);
  const primaryArtistId = useSelector(state => state.spotifyApiReducer.primaryArtist);

  const handleOnChange = async (e) => {
    const { name, value } = e.target;

    if (name === 'artist') {
      setArtistName(value);
    };

    if (value.length < 3) {
      setSearchResults([]);
    }

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
    }

  }

  const handleSelect = (e) => {
    e.preventDefault();
    const { id } = e.target;

    if (!primaryArtistId.length && id) {
      dispatch(setPrimaryArtist(id));
    }
  }

  if (primaryArtistId.length) {
    return (
      <div>
        <h1>Select 3 Artists to match</h1>
        <input type="text" value={artistName} name="artist" onChange={handleOnChange} />
        <DisplayArtists artists={searchResults} handleSelect={handleSelect} />
      </div>
    );
  }

  return (
    <div>
      <h1>Search for an artist</h1>
        <input type="text" value={artistName} name="artist" onChange={handleOnChange} />
        <DisplayArtists artists={searchResults} handleSelect={handleSelect} />
    </div>
  );
}

export default Home;