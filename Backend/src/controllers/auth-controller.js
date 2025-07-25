import { User } from "../models/user-model.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { cookieOptions } from "../config/cookie-config.js";
dotenv.config();
const registerController = async (req, res) => {
  try {
    console.log("hi hello")
    const { username, email, password } = req.body;
    const isUserExisted = await User.findOne({
      $or: [{ username: username }, { email: email }],
    });
    if (isUserExisted) {
      return res.status(400).json({
        status: false,
        message:
          "user is existed ,please try again with another email or username",
      });
    }
    const hashPassword = await argon2.hash(password);
    const newUser = await User.create({
      username: username,
      email: email,
      password: hashPassword,
    });
    if (!newUser) {
      return res.status(400).json({
        status: false,
        message: "failed to register user",
      });
    }
    res.status(200).json({
      status: true,
      message: "successfully user is registered",
      newUser,
    });
  } catch (error) {
    console.log("failed to create user", error);
    return res.status(400).json({
      status: false,
      message: "error while register the user",
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;
    const isUserExisted = await User.findOne({ username: username });
    if (!isUserExisted) {
      return res.status.json({
        status: true,
        message: "user not regisered yet ,please register and ry again",
      });
    }
    const isPasswordMatch = await argon2.verify(
      isUserExisted.password,
      password
    );
    if (!isPasswordMatch) {
      return res.status(400).json({
        status: false,
        message:
          "password is incorrect ,please try again with correct password",
      });
    }
    const token = jwt.sign({ isUserExisted }, process.env.JWT_KEY);
    if (!token) {
      return res.status(400).json({
        status: false,
        message: "token is unavailble",
      });
    }
    res.cookie("token", token, cookieOptions);
    res.status(200).json({
      status: true,
      messagec: "logined succesfully",
      user: isUserExisted,
      token,
    });
  } catch (error) {
    console.log("error at login controller ", error);
    res.status(400).json({
      status: false,
      message: "error while logined",
    });
  }
};

export { registerController, loginController };
