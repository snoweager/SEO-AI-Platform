const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json({ message: 'Registered' });
};

exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user && req.body.password === user.password) {
    const token = jwt.sign({ id: user._id }, 'secret');
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};
