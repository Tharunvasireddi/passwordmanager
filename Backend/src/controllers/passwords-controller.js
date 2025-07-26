import { Password } from "../models/password-model.js";
const addPasswordController = async (req, res) => {
  try {
    const { appname, password } = req.body;
    if (!appname || !password) {
      return res.status(400).json({
        status: false,
        message: "appname and password are required",
      });
    }

    if (!req.user) {
      return res.status(400).json({
        status: false,
        message: "user not found",
      });
    }
    const newPassword = await Password.create({
      appname: appname,
      password: password,
      user: req.user._id,
    });
    if (!newPassword) {
      return res.status(400).json({
        status: false,
        message: "unable to add new password",
      });
    }
    res.status(200).json({
      status: true,
      message: "successfully added the new password",
      newPassword,
    });
  } catch (error) {
    console.log("error while adding new password", error);
    return res.status(400).json({
      status: false,
      message: "error while adding new password",
    });
  }
};

const fetchPasswordsController = async (req, res) => {
  console.log("fetching the passwords")
  try {
    const id = req.user._id;
    if (!id) {
      return res.status.json({
        status: false,
        message: "user if not found please login and try again later",
      });
    }
    const passwords = await Password.find({ user: id });
    if (!passwords) {
      return res.status(400).json({
        satus: false,
        message: "passwords are not found",
      });
    }
    console.log("passwords are fetched successfull", passwords);
    res.status(200).json({
      status: true,
      message: "passwords are fetched successfull",
      passwords: passwords,
    });
  } catch (error) {
    console.log("error whule fetching the passwords ", error);
    return res.status(400).json({
      status: false,
      message: "error while feching the passwords",
    });
  }
};

export { addPasswordController, fetchPasswordsController };
