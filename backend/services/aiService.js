// services/aiService.js
const axios = require("axios");

const generateContent = async (prompt, apiKey) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
        max_tokens: 800,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error("OpenAI API error:", error.response?.data || error.message);
    throw new Error("Failed to generate content.");
  }
};

module.exports = { generateContent };
