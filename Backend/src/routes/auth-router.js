import { Router } from "express";
import {
  loginController,
  registerController,
} from "../controllers/auth-controller.js";
import { addPasswordController } from "../controllers/passwords-Controller.js";
import { authMiddleware } from "../middlewares/authmiddleware.js";
import { fetchPasswordsController,deletePasswordController  } from "../controllers/passwords-controller.js";

const router = Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/addpassword", authMiddleware, addPasswordController);
router.get("/fetch", authMiddleware, fetchPasswordsController);
router.delete("/delete/:id", authMiddleware, deletePasswordController);
export { router };
