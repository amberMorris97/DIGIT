import React, { useState } from 'react';
import { submitArtist } from '../api/waitlistApi';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Tooltip,
  InputAdornment,
  IconButton,
  CircularProgress
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from 'react-router-dom';
import './WaitlistForm.scss';

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    artistName: '',
    socialLink: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    try {
      const result = await submitArtist(formData);

      if (result.success) {
        localStorage.setItem('signUpSuccess', 'true');
        setSuccess(true);
        history.push('/confirmation');
      }
    } catch (err) {
      setError(err.message || 'An error occured');
    } finally {
      setLoading(false);
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
          Waitlist
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="subtitle1" className="MuiFormLabel-root">
                First Name
              </Typography>
              <TextField
                name="firstName"
                required
                fullWidth
                id="firstName"
                // placeholder="Full Name"
                value={formData.firstName}
                onChange={handleChange}
                InputProps={{ className: 'MuiInputBase-input' }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" className="MuiFormLabel-root">
                Last Name
              </Typography>
              <TextField
                name="lastName"
                required
                fullWidth
                id="lastName"
                value={formData.lastName}
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
                Artist or Group name
              </Typography>
              <TextField
                name="artistName"
                required
                fullWidth
                id="artistName"
                // placeholder="Link to social media or published music"
                value={formData.artistName}
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
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
              <CircularProgress />
            </Box>
          ) : (
          <div className="next-button">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="MuiButton-contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </div>
          )}
          <span className="error-text">{error}</span>
        </Box>
      </Box>
    </Container>
  );
};

export default WaitlistForm;