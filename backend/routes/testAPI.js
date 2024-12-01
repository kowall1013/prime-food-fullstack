const express = require('express');
const router = express.Router();
const cors = require('cors');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({ msg: 'This is CORS-enabled for a Single Route' });
});

module.exports = router;
