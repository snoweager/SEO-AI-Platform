const express = require('express');
const router = express.Router();
const { getGSC, getPSI, getGA } = require('../controllers/seoController');

router.post('/gsc', getGSC);
router.post('/psi', getPSI);
router.post('/ga', getGA);

module.exports = router;
