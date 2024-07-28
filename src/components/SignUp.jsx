import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { app, analytics, auth, db } from '../firebase';
import { setDoc, doc } from 'firebase/firestore';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Tooltip,
  InputAdornment,
  IconButton
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from 'react-router-dom';
import './SignUp.scss';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    socialLink: '',
  });
  const [authError, setAuthError] = useState('');

  const history = useHistory();

  const handleChange = (e) => {
    setAuthError('');
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email.value, password.value);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          fullName: formData.name,
          socialLink: formData.socialLink,
          approved: false,
        });
      }
    } catch (err) {
      console.log(err.message);
      setAuthError(err.message.split(' ')[2]);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 8
        }}
      >
        <Typography component="h1" variant="h5" className="signup-header">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSignUp} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="subtitle1" className="MuiFormLabel-root">
                Full Name
              </Typography>
              <TextField
                name="name"
                required
                fullWidth
                id="name"
                // placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                InputProps={{ className: 'MuiInputBase-input' }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" className="MuiFormLabel-root">
                Email Address
              </Typography>
              <TextField
                name="email"
                required
                fullWidth
                id="email"
                // placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                type="email"
                InputProps={{ className: 'MuiInputBase-input' }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" className="MuiFormLabel-root">
                password
              </Typography>
              <TextField
                name="password"
                required
                fullWidth
                id="password"
                // placeholder="Link to social media or published music"
                value={formData.password}
                onChange={handleChange}
                InputProps={{ className: 'MuiInputBase-input' }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" className="MuiFormLabel-root">
                Link to Social Media or Music
              </Typography>
              <TextField
                name="socialLink"
                required
                fullWidth
                id="socialLink"
                // placeholder="Link to social media or published music"
                value={formData.socialLink}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Tooltip title="Please provide a link to your social media or music for verification purposes">
                        <IconButton edge="end">
                          <InfoIcon />
                        </IconButton>
                      </Tooltip>
                    </InputAdornment>
                    ),
                    className: 'MuiInputBase-input'
                }}
                helperText="This link is used for verification purposes"
              />
            </Grid>
          </Grid>
          <div className="next-button">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="MuiButton-contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </div>
          <span id="auth-error">{authError}</span>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;

