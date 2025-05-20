import jwt from 'jsonwebtoken';
import User from '../Models/UserModel.js'; // Make sure the path is correct

export const ProtectRoutes = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // ✅ Check if the auth header starts with "Bearer "
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];

    try {
      // ✅ Decode and verify the JWT token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // ✅ Find user by ID from decoded token
      const currentUser = await User.findById(decoded.id);

      if (!currentUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      // ✅ Attach user to the request object
      req.user = currentUser;

      // ✅ Move to next route handler
      console.log('Authenticated user:', currentUser);
      console.log('Decoded token:', decoded);
      return next();
    } catch (error) {
      console.error('Invalid token:', error.message);
      return res.status(401).json({ message: 'Invalid or expired token' });
    }
  } else {
    return res.status(401).json({ message: 'Session expired or unauthorized' });
  }
};
