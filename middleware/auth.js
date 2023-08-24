const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.header('x-auth-token'); // Get the token from the header

  if (!token) {
    return res.status(401).json({ message: 'Authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, 'your-secret-key'); // Use your actual secret key
    req.user = decoded.user; // Store the decoded user data in the request
    next(); // Move to the next middleware or route handler
  } catch (error) {
    console.error('Token verification error:', error.message);
    res.status(401).json({ message: 'Token is not valid' }); // Use 401 for authentication issues
  }
};

module.exports = authenticate;
