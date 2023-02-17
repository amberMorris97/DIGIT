import React, { useState } from 'react';
import { Input, InputLabel, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { submitEmail } from '../redux/actions/appApiActions';

const Submissions = () => {
  const dispatch = useDispatch();

  const submitEmailSuccess = useSelector(state => state.appApiReducer.submitEmailSuccess);

  const [email, setEmail] = useState('');

  const handleOnChange = (e) => {
    const { value } = e.target;

    setEmail(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(submitEmail(email));

    setEmail('');
  }

  return (
    <div className="submission-view">
    <h3>Thanks for submitting!</h3>
    {!submitEmailSuccess ?
    <>
      <InputLabel htmlFor="name">Optionally submit your email for product updates</InputLabel>
      <Input
        id="email-submission"
        onChange={handleOnChange}
      />
      <Button variant="text" onClick={handleSubmit}>Submit</Button>
    </> : <h3>Thanks, you're all set!</h3>}
    </div>
  )
}

export default Submissions;