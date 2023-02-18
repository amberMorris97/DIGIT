import React from 'react';
import { Card, Typography, CardContent, CardMedia } from '@mui/material';

export const ArtistProfileCard = ({ id, img, name, uri }) => (
  <div className="artist-profile-card" id={id}>
    <Card sx={{ display: 'flex' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5">
          <a style={{ color: '#E6DDD6', textDecoration: 'none' }}href={uri}>{name}</a>
        </Typography>
        <Typography component="div" variant="subtitle1">
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image={img}
        alt="Artist profile photo"
      />
    </Card>
  </div>
);