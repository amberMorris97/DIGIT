import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const ConfirmationPage = () => {
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
        <Typography component="h1" variant="h4">
          Thank You!
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Your submission has been received. Your profile creation is pending approval.
        </Typography>
      </Box>
    </Container>
  );
};

export default ConfirmationPage;