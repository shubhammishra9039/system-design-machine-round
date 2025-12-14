import express from "express";
import { userRegister, userLogin, getAllUsers } from "../controllers/user.js";
const router = express.Router();

router.post("/userRegister", userRegister);

router.post("/userLogin", userLogin);
router.get("/getAllUsers", getAllUsers);

export default router;
