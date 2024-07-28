import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  LinearProgress,
} from '@mui/material';

import './Upload.scss';

const StepTwo = ({ backToStepOne, handleSubmit, formData, handleChange, handleFileChange }) => {
  const [audioSrc, setAudioSrc] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const audioRef = useRef(null);

  const handleFileChangeWithPreview = (e) => {
    handleFileChange(e);
    const file = e.target.files[0];
    if (file) {
      setAudioSrc(URL.createObjectURL(file));
    } else {
      setAudioSrc(null);
    }
  };

  useEffect(() => {
    return () => {
      if (audioSrc) {
        URL.revokeObjectURL(audioSrc);
      }
    };
  }, [audioSrc]);

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
        <Box component="form" onSubmit={(e) => handleSubmit(e, setUploadProgress)} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="subtitle1" className="MuiFormLabel-root">
                Upload Track:
              </Typography>
              <TextField
                type="file"
                name="track"
                fullWidth
                id="track"
                inputProps={{
                  accept: "audio/*",
                  className: 'MuiInputBase-input'
                }}
                onChange={handleFileChangeWithPreview}
              />
            </Grid>
            {audioSrc && (
              <Grid item xs={12}>
                <Typography variant="subtitle1">
                  Track Preview:
                </Typography>
                <audio controls ref={audioRef} src={audioSrc} style={{ width: '100%' }} />
              </Grid>
            )}
            {uploadProgress > 0 && (
              <Grid item xs={12}>
                <Typography variant="subtitle1">
                  Upload Progress:
                </Typography>
                <LinearProgress variant="determinate" value={uploadProgress} />
                <Typography variant="body2" color="textSecondary">{`${Math.round(uploadProgress)}%`}</Typography>
              </Grid>
            )}
          </Grid>
          <div className="button-group">
            <Button
              type="button"
              fullWidth
              variant="contained"
              className="MuiButton-contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={backToStepOne}
            >
              Back
            </Button>
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
        </Box>
      </Box>
    </Container>
  );
};

export default StepTwo;


