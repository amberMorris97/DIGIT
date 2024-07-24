import React from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  MenuItem
} from '@mui/material';

import './Upload.scss';

const StepOne = ({ backToSignIn, nextStep, handleSubmit, formData, handleChange }) => {
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
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="subtitle1" className="MuiFormLabel-root">
                track name:
              </Typography>
              <TextField
                name="trackName"
                fullWidth
                id="trackName"
                placeholder=""
                value={formData.trackName}
                onChange={handleChange}
                InputProps={{ className: 'MuiInputBase-input' }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                track description:
              </Typography>
              <TextField
                name="trackDesc"
                placeholder="(optional)"
                fullWidth
                id="trackDesc"
                value={formData.license}
                onChange={handleChange}
                multiline
                rows={4}
                InputProps={{ className: 'MuiInputBase-input' }}
              >
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                lyrics:
              </Typography>
              <TextField
                name="lyrics"
                fullWidth
                id="lyrics"
                placeholder="(optional)"
                value={formData.lyrics}
                onChange={handleChange}
                multiline
                rows={4}
                InputProps={{ className: 'MuiInputBase-input' }}
              >
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" className="MuiFormLabel-root">
                track credits:
              </Typography>
              <TextField
                name="trackCredits"
                fullWidth
                id="trackCredits"
                placeholder="(optional)"
                value={formData.credits}
                onChange={handleChange}
                InputProps={{ className: 'MuiInputBase-input' }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" className="MuiFormLabel-root">
                release date
              </Typography>
              <TextField
                name="releaseDate"
                fullWidth
                id="releaseDate"
                placeholder="(optional)"
                value={formData.releaseDate}
                onChange={handleChange}
                InputProps={{ className: 'MuiInputBase-input' }}
              />
            </Grid>
          </Grid>
          <div className="button-group">
            <Button
              type="button"
              fullWidth
              variant="contained"
              className="MuiButton-contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={backToSignIn}
            >
              Back
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="MuiButton-contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={nextStep}
            >
              Next
            </Button>
          </div>
        </Box>
      </Box>
    </Container>
  );
};

export default StepOne;