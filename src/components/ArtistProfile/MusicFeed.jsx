import React from 'react';
import { Box, Card, CardContent, Typography, List, ListItem, ListItemAvatar, ListItemText, Avatar, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const MusicFeed = () => {

  const dummyProfile = {
    _id: "unique_id",
    artistName: "LUCKYSEASON",
    avatarUrl: "https://example.com/avatar.jpg",
    fans: 10000,
    totalStreams: 100000,
    about: "This is a short bio about the artist LUCKYSEASON.",
    latestTrack: "Latest track details or name",
    songs: [
      {
        title: "Song 1",
        album: "Album 1",
        duration: "3:45",
        url: "https://example.com/song1.mp3"
      },
      {
        title: "Song 2",
        album: "Album 2",
        duration: "4:20",
        url: "https://example.com/song2.mp3"
      },
      {
        title: "Song 3",
        album: "Album 3",
        duration: "5:00",
        url: "https://example.com/song3.mp3"
      },
      {
        title: "Song 4",
        album: "Album 4",
        duration: "3:30",
        url: "https://example.com/song4.mp3"
      }
    ]
  };


  return (
    <Box>
      <List>
        {dummyProfile.songs.map((song, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar variant="square">
                <IconButton>
                  <PlayArrowIcon />
                </IconButton>
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={song.title}
              secondary={`Album: ${song.album} • Duration: ${song.duration}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )
};

export default MusicFeed;