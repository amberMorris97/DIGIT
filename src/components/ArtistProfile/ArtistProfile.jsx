// import React, { useEffect, useState } from 'react';
// import { auth, db } from '../firebase';
// import { doc, getDoc } from 'firebase/firestore';

// const ArtistProfile = () => {
//   const [userDetails, setUserDetails] = useState(null);

//   const fetchUserData = async () => {
//     auth.onAuthStateChanged(async (user) => {
//       const docRef = doc(db, "Users", user.uid);
//       const docSnap = await getDoc(docRef);
//       if (docSnap.exists()) {
//         setUserDetails(docSnap.data());
//       } else {
//         console.log('User is not logged in');
//       }
//     });
//   };

//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   return (
//     <div>
//       {userDetails ? (
//         <>welcome</>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }
// export default ArtistProfile;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Box, Typography, Button, Avatar, Tabs, Tab, Card, CardContent } from '@mui/material';
import { useParams } from 'react-router-dom';
import MusicFeed from './MusicFeed.jsx';
import './ArtistProfile.scss';

function ArtistProfile() {
  const [profile, setProfile] = useState(null);
  const [tabIndex, setTabIndex] = useState(0); // State to manage the active tab
  const { id } = useParams(); // Assuming you're using React Router to get the ID from the URL

  useEffect(() => {
    axios.get(`/api/profile/${id}`)
      .then(response => {
        setProfile(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the profile!', error);
      });
  }, [id]);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  if (!profile) return <p>Loading...</p>;

  return (
    <Container>
      <Box className="header">
        <Avatar className="profile-picture" src={profile.avatarUrl} />
        <Typography variant="h5" className="username">{profile.artistName}</Typography>
      </Box>
      <Box className="stats">
        <Typography>Fans: <span>{profile.fans}</span></Typography>
        <Typography>Total Streams: <span>{profile.totalStreams}</span></Typography>
      </Box>
      <Box className="follow-button">
        <Button variant="outlined">Follow</Button>
      </Box>
      <Box className="about-section">
        <Typography>about:</Typography>
        <Card>
          <CardContent>
            {profile.about}
          </CardContent>
        </Card>
      </Box>
      <Box className="tabs-section">
        <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab label="feed" />
          <Tab label="music" />
          <Tab label="community" />
        </Tabs>
      </Box>
      <Box className="tab-content">
        {tabIndex === 0 && <FeedContent profile={profile} />}
        {tabIndex === 1 && <MusicFeed profile={profile} />}
        {tabIndex === 2 && <CommunityContent profile={profile} />}
      </Box>
    </Container>
  );
}

function FeedContent({ profile }) {
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography>{profile.latestTrack}</Typography>
        </CardContent>
      </Card>
      {/* Add more feed content here */}
    </Box>
  );
}

function MusicContent({ profile }) {
  return (
    <Box>
      {/* Add music content here */}
      <Typography>Music content for {profile.artistName}</Typography>
    </Box>
  );
}

function CommunityContent({ profile }) {
  return (
    <Box>
      {/* Add community content here */}
      <Typography>Community content for {profile.artistName}</Typography>
    </Box>
  );
}

export default ArtistProfile;