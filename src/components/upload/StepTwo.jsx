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

const StepTwo = ({ prevStep, handleSubmit, formData, handleChange }) => {
  const licenseOptions = [
    { value: 'allRightsReserved', label: 'All Rights Reserved' },
    { value: 'none', label: 'None' }
  ];

  const creativeCommonsOptions = [
    { value: 'attributionNonCommercialNoDerivatives', label: 'Attribution Non-commercial No Derivatives' },
    { value: 'attributionNonCommercialShareAlike', label: 'Attribution Non-commercial Share Alike' },
    { value: 'attributionNonCommercial', label: 'Attribution Non-commercial' },
    { value: 'attributionNoDerivatives', label: 'Attribution No Derivatives' },
    { value: 'attributionShareAlike', label: 'Attribution Share Alike' },
    { value: 'attribution', label: 'Attribution' },
    { value: 'none', label: 'None' }
  ];

  return (
    <h1>future soundcloud integration</h1>
    // <Container maxWidth="sm">
    //   <Box
    //     sx={{
    //       display: 'flex',
    //       flexDirection: 'column',
    //       alignItems: 'center',
    //       mt: 8
    //     }}
    //   >
    //     <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
    //       <Grid container spacing={2}>
    //         <Grid item xs={12}>
    //           <Typography variant="subtitle1" className="MuiFormLabel-root">
    //             tags
    //           </Typography>
    //           <TextField
    //             name="tags"
    //             fullWidth
    //             id="tags"
    //             placeholder="comma-separated list of tags, i.e.: alternative,rock,punk,emo"
    //             value={formData.tags}
    //             onChange={handleChange}
    //             InputProps={{ className: 'MuiInputBase-input' }}
    //           />
    //         </Grid>
    //         <Grid item xs={12}>
    //           <Typography variant="subtitle1" className="MuiFormLabel-root">
    //             License
    //           </Typography>
    //           <TextField
    //             select
    //             name="license"
    //             fullWidth
    //             id="license"
    //             value={formData.license}
    //             onChange={handleChange}
    //             InputProps={{ className: 'MuiInputBase-input' }}
    //           >
    //             {licenseOptions.map((option) => (
    //               <MenuItem key={option.value} value={option.value}>
    //                 {option.label}
    //               </MenuItem>
    //             ))}
    //           </TextField>
    //         </Grid>
    //         <Grid item xs={12}>
    //           <Typography variant="subtitle1" className="MuiFormLabel-root">
    //             Creative Commons
    //           </Typography>
    //           <TextField
    //             select
    //             name="creativeCommons"
    //             fullWidth
    //             id="creativeCommons"
    //             value={formData.creativeCommons}
    //             onChange={handleChange}
    //             InputProps={{ className: 'MuiInputBase-input' }}
    //           >
    //             {creativeCommonsOptions.map((option) => (
    //               <MenuItem key={option.value} value={option.value}>
    //                 {option.label}
    //               </MenuItem>
    //             ))}
    //           </TextField>
    //         </Grid>
    //         <Grid item xs={12}>
    //           <Typography variant="subtitle1" className="MuiFormLabel-root">
    //             track ISRC
    //           </Typography>
    //           <TextField
    //             name="trackISRC"
    //             fullWidth
    //             id="trackISRC"
    //             placeholder="(optional)"
    //             value={formData.trackISRC}
    //             onChange={handleChange}
    //             InputProps={{ className: 'MuiInputBase-input' }}
    //           />
    //         </Grid>
    //         <Grid item xs={12}>
    //           <Typography variant="subtitle1" className="MuiFormLabel-root">
    //             release date
    //           </Typography>
    //           <TextField
    //             name="releaseDate"
    //             fullWidth
    //             id="releaseDate"
    //             placeholder="(optional)"
    //             value={formData.releaseDate}
    //             onChange={handleChange}
    //             InputProps={{ className: 'MuiInputBase-input' }}
    //           />
    //         </Grid>
    //       </Grid>
    //       <div className="button-group">
    //         <Button
    //           type="button"
    //           fullWidth
    //           variant="contained"
    //           className="MuiButton-contained"
    //           sx={{ mt: 3, mb: 2 }}
    //           onClick={prevStep}
    //         >
    //           Back
    //         </Button>
    //         <Button
    //           type="submit"
    //           fullWidth
    //           variant="contained"
    //           className="MuiButton-contained"
    //           sx={{ mt: 3, mb: 2 }}
    //         >
    //           Next
    //         </Button>
    //       </div>
    //     </Box>
    //   </Box>
    // </Container>
  );
};

export default StepTwo;