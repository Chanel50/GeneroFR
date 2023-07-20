const express = require('express');
const router = express.Router();
const { getStatistics } = require('../controllers/statistique');

router.get('/', getStatistics);

module.exports = router;

