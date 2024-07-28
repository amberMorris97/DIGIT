import React, { useState } from 'react';
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
import './Login.scss';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    socialLink: ''
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
    history.push('/upload');
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
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
          </Grid>
          <div className="next-button">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="MuiButton-contained"
              sx={{ mt: 3, mb: 2 }}
            >
              next
            </Button>
          </div>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;