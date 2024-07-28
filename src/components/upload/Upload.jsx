import React, { useState } from 'react';
import StepOne from './StepOne.jsx';
import StepTwo from './StepTwo.jsx';
import axios from 'axios';

const Upload = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    trackName: '',
    trackDesc: '',
    lyrics: '',
    trackCredits: '',
    releaseDate: '',
    track: null, // For the file
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      track: e.target.files[0],
    });
  };

  const handleSubmit = async (e, setUploadProgress) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await axios.post('/signup', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          let percent = Math.floor((loaded * 100) / total);
          setUploadProgress(percent);
        }
      });

      if (response.status === 201) {
        alert('Sign-Up successful');
        setUploadProgress(0); // Reset progress after successful upload
      } else {
        alert('Sign-Up failed');
        setUploadProgress(0); // Reset progress on failure
      }
    } catch (error) {
      console.error('Error during sign-up:', error);
      alert('Sign-Up failed');
      setUploadProgress(0); // Reset progress on failure
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const backToSignIn = () => {
    setStep(step - 1);
  };

  return (
    <div>
      {step === 1 && (
        <StepOne
          backToSignIn={backToSignIn}
          nextStep={nextStep}
          handleSubmit={handleSubmit}
          formData={formData}
          handleChange={handleChange}
        />
      )}
      {step === 2 && (
        <StepTwo
          backToStepOne={backToSignIn}
          handleSubmit={handleSubmit}
          formData={formData}
          handleChange={handleChange}
          handleFileChange={handleFileChange}
        />
      )}
    </div>
  );
};

export default Upload;



