import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const authMiddleware = async (req, res, next) => {
  try {
    // Check for token in cookies first, then in Authorization header
    let token = req.cookies.token;
    
    if (!token) {
      const authHeader = req.headers.authorization;
      if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.substring(7); // Remove 'Bearer ' prefix
      }
    }
    
    if (!token) {
      return res.status(401).json({
        status: false,
        message: "token is not found",
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    if (!decoded) {
      return res.status(400).json({
        status: false,
        message: "user  if not found please login",
      });
    }
    console.log("this is user middleware",decoded.isUserExisted)
    req.user = decoded.isUserExisted;
    next();
  } catch (error) {
    console.log("error at authmiddleware");
    return res.status(400).json({
      status: false,
      message: "error at authmiddleware",
    });
  }
};

export { authMiddleware };
