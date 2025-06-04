// services/gscService.js
// NOTE: GSC integration requires OAuth and service account setup.

const getSearchConsoleData = async () => {
  // Simulate response
  return {
    totalClicks: 1250,
    totalImpressions: 34000,
    ctr: "3.7%",
    avgPosition: 14.2,
  };
};

module.exports = { getSearchConsoleData };
