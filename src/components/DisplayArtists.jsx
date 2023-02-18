import React from 'react';
import Button from '@mui/material/Button';
import { ArtistProfileCard } from './ArtistProfileCard.jsx';

const DisplayArtists = ({ topResult, artists, handleSelect }) => {
  topResult.img = topResult.images[0]?.url;
  const { id, url, uri, name, img, popularity } = topResult;

  return (
    <div className="search-result-display">
      <ArtistProfileCard id={id} img={img} name={name} uri={uri} />
      <br />
      <Button variant="outlined" onClick={(e) => handleSelect(e, id, img, url, popularity, uri, name)}>Select {topResult.name}</Button>
  </div>);
};

export default DisplayArtists;