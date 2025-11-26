import express from "express";
import Todo from "../models/TodoModel.js";
import { createTask, deleteTask, getAllTasks, updateTask } from "../controllers/TodoController.js";

const router = express.Router();

// Create Task
router.post("/", createTask);

// Display Task
router.get("/", getAllTasks);

// Update Task
router.put("/:id", updateTask );

// Delete Task
router.delete("/:id", deleteTask);

export default router;
