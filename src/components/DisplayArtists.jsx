import React, { useState, useEffect } from 'react';
import { Card, CardContent, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

import { ArtistProfileCard } from './ArtistProfileCard.jsx';

const DisplayArtists = ({ topResult, artists, handleSelect }) => {
  topResult.img = topResult.images[0].url;
  const { id, url, uri, name, img, popularity } = topResult;

  return (
    <div className="search-result-display">
      <ArtistProfileCard id={id} img={img} name={name} />
      <br />
      <Button variant="outlined" onClick={(e) => handleSelect(e, id, img, url, popularity, uri, name)}>Select {topResult.name}</Button>
  </div>);
};

export default DisplayArtists;