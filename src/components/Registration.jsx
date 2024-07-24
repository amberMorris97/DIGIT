import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

const Registration = () => {
  const history = useHistory();

  const [formData, setFormData]  = useState({
    username: '',
    email: '',
    password: ''
  });

  const onRegisterSubmit = (e) => {
    e.preventDefault();
    //todo: validate inputs
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={onRegisterSubmit}>
        <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        placeholder="Username"
        />
      </form>
    </div>
  );
}

export default Registration;