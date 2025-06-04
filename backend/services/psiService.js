// services/psiService.js
const axios = require("axios");

const analyzeURL = async (url) => {
  const api = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";
  const params = {
    url,
    category: ["performance", "seo"],
    strategy: "desktop",
  };

  try {
    const { data } = await axios.get(api, { params });
    const lighthouse = data.lighthouseResult.categories;
    return {
      performance: lighthouse.performance.score * 100,
      seo: lighthouse.seo.score * 100,
    };
  } catch (error) {
    console.error("PageSpeed API error:", error.response?.data || error.message);
    throw new Error("Failed to fetch PageSpeed data.");
  }
};

module.exports = { analyzeURL };
