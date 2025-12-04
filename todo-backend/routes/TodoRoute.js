import express from "express";
import { createTask, deleteTask,  getAllTasks, getTaskById, toggleStatus, updateTask } from "../controllers/TodoController.js";

const router = express.Router();

// Create Task
router.post("/todo", createTask);

// Display All Task
router.get("/todos", getAllTasks);

//Display Specific Task
router.get("/todo/:id", getTaskById)

// Update Task
router.put("/todo/:id", updateTask);

// Toggle Completion Status
router.patch("/todo/:id/toggle", toggleStatus);

// Delete Task
router.delete("/todo/:id", deleteTask);

export default router;
