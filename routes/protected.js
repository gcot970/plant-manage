const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/auth');

router.get('/protected', authenticate, (req, res) => {
  res.json({ message: 'You have access to this protected route' });
});

module.exports = router;
