import jwt, { decode } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(400).json({
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
