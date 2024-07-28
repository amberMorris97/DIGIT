const app = require('express');
const router = app.Router();

const waitlistController = require('../controllers/waitlistController');

router.post('/submit', waitlistController.newWaitlistSubmisssion);

module.exports = router;