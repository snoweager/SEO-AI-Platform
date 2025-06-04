const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  userId: String,
  keyword: String,
  clicks: Number,
  impressions: Number
});

module.exports = mongoose.model('Report', reportSchema);
