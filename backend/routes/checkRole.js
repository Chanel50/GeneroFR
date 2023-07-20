const express = require('express');
const router = express.Router();
const verifyRole = require('../middleware/verifyRole');

router.get('/admin', verifyRole(['admin']), (req, res) => {
  res.send('This is an admin route');
});

router.get('/user', verifyRole(['user', 'admin']), (req, res) => {
  res.send('This is a user route');
});

module.exports = router;