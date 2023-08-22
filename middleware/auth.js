const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.header('x-auth-token'); 
  // Get the token from the header

  if (!token) {
    return res.status(401).json({ message: 'Authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, 'your-secret-key');
    req.user = decoded.user;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Token is not valid' });
  }
};

module.exports = authenticate;
