const express = require('express');
const userService = require('../services/userService');
const router = express.Router();

router.get('/fetchUser', async (req, res) => {
  try {
    const { email } = req.query;

    const user = await (userService.fetchUser(email));

    if (!user) {
      res.status(404).json({ message: 'User not found '});
    } else {
      return user;
    }


  } catch (error) {
    console.error('Error finding user:', error);
    res.status(500).json({ message: 'Internal server error' })
  }
});

router.post('/register', async (req, res) => {
  // request variables: username, email, display name, 3 favorite artists
  try {
    const { username, email } = req.body;
    const newUser = await userService.createUser(username, email);
    res.status(200).json(newUser);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/login', async (req, res) => {
  // request variables: email
});

router.get('/dashboard', async (req, res) => {
  // dashboard logic
});

module.exports = router;