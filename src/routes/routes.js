const express = require('express');

const router = express.Router();

// health check
router.get('/ping', (req, res) => res.send('OK'));

module.exports = router;
