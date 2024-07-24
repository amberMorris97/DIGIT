import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';
import StepOne from './StepOne.jsx';
import StepTwo from './StepTwo.jsx';

const Upload = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    trackName: '',
    trackDesc: '',
    lyrics: '',
    credits: '',
    tags: '',
    license: '',
    creativeCommons: '',
    trackISRC: '',
    releaseDate: ''
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  // const handleNextStep = (e) => {
  //   e.preventDefault();

  // }

  const handleBackToSignIn = (e) => {
    e.preventDefault();
  }
  return (
    <div className="upload-container">
      <div className="upload-header">
        <Typography component="h1" variant="h5" className="upload-header">
            Upload Your Music
        </Typography>
      </div>
      {step === 1 ? (
        <StepOne nextStep={nextStep} formData={formData} handleChange={handleChange} />
      ) : (
        <StepTwo prevStep={prevStep} handleSubmit={handleSubmit} formData={formData} handleChange={handleChange} />
      )}
    </div>
  );
};

export default Upload;
