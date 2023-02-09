import React, { useState, useEffect } from 'react';
import { Card, CardContent, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

const DisplayArtists = ({ topResult, artists, handleSelect }) => {
  const { id, url, uri, name } = topResult;

  return (
    <div className="search-result-display">
      <Card sx={{ display: 'flex'}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {topResult.name}
          </Typography>
          <Typography component="div" variant="subtitle1">
            Featured Artist
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          sx={{ width: 100 }}
          image={topResult.images[0].url}
          alt="Artist profile picture"
        />
      </Card>
      <br />
      <Button variant="outlined" onClick={(e) => handleSelect(e, id, topResult.images[0].url, url, uri, name)}>Select {topResult.name}</Button>
  </div>);
};

export default DisplayArtists;