const Waitlist = require('../database/models/Waitlist');

const newWaitlistSubmisssion = async (req, res) => {
  try {
    const { email } = req.body;

    const existingEmail = await Waitlist.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ success: false, message: 'Email is already in use' });
    }
    const submission = new Waitlist(req.body);

    await submission.save();
    res.status(201).json({ success: true, data: submission });
  } catch (err) {
    res.status(400).json({ success: false, data: err });
  }
};

module.exports = { newWaitlistSubmisssion };