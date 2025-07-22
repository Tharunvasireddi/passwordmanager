import mongoose from "mongoose";

const passwordSchema = new mongoose.Schema({
  appname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const Password = mongoose.model("Password", passwordSchema);
export { Password };
