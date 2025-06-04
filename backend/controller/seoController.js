const { fetchGSCData, fetchPSIData, fetchGAData } = require('../services/gscService');

exports.getGSC = async (req, res) => {
  const data = await fetchGSCData(req.body);
  res.json(data);
};

exports.getPSI = async (req, res) => {
  const data = await fetchPSIData(req.body);
  res.json(data);
};

exports.getGA = async (req, res) => {
  const data = await fetchGAData(req.body);
  res.json(data);
};
