import { Router } from "express";
import {
  loginController,
  registerController,
} from "../controllers/auth-controller.js";
import { addPasswordController, fetchPasswordsController, deletePasswordController } from "../controllers/passwords-controller.js";
import { authMiddleware } from "../middlewares/authmiddleware.js";

const router = Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/addpassword", authMiddleware, addPasswordController);
router.get("/fetch", authMiddleware, fetchPasswordsController);
router.delete("/delete/:id", authMiddleware, deletePasswordController);


export { router };
