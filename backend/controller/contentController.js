const axios = require('axios');

exports.generateContent = async (req, res) => {
  const { keyword, tone, type } = req.body;
  try {
    const response = await axios.post('http://localhost:8000/generate', { keyword, tone, type });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate content' });
  }
};
