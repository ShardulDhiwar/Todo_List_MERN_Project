import express from "express";
import Todo from "../models/TodoModel.js";
import { createTask, deleteTask, getAllCompletedTasks, getAllPendingTasks, getAllTasks, getTaskById, toggleStatus, updateTask } from "../controllers/TodoController.js";

const router = express.Router();

// Create Task
router.post("/todo", createTask);

// Display All Task
router.get("/todos", getAllTasks);

// Display All Pending Tasks
router.get("/todos/pending", getAllPendingTasks);

// Display All Completed Tasks
router.get("/todos/completed", getAllCompletedTasks);

//Display Specific Task
router.get("/todo/:id", getTaskById)

// Update Task
router.put("/todo/:id", updateTask);

// Toggle Completion Status
router.patch("/todo/:id/toggle", toggleStatus);

// Delete Task
router.delete("/todo/:id", deleteTask);

export default router;
