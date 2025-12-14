import express from "express";
import {
  createTask,
  updateTask,
  deleteTask,
  getAllTask,
  assignTaskToUser,
} from "../controllers/task.js";
const router = express.Router();

router.post("/createTask", createTask);
router.put("/updateTask", updateTask);
router.delete("/deleteTask", deleteTask);
router.get("/getAllTask", getAllTask);
router.patch("/assignTaskToUser", assignTaskToUser);

export default router;
