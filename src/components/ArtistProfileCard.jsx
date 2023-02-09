import React from 'react';
import { Card, Typography, CardContent, CardMedia } from '@mui/material';

export const ArtistProfileCard = ({ artist }) => (
  <div className="artist-profile-card">
    <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {artist.name}
            </Typography>
            <Typography component="div" variant="subtitle1">
              Featured Artist
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 100 }}
            image={artist.img}
            alt="Artist profile photo"
          />
    </Card>
  </div>
);