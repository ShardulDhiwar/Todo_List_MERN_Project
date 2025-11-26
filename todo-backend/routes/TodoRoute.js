import express from "express";
import Todo from "../models/TodoModel.js";
import { createTask, deleteTask, getAllTasks, getTaskById, updateTask } from "../controllers/TodoController.js";

const router = express.Router();

// Create Task
router.post("/todo", createTask);

// Display Task
router.get("/todos", getAllTasks);

//Display Specific Task
router.get("/todo/:id", getTaskById)

// Update Task
router.put("/todo/:id", updateTask );

// Delete Task
router.delete("/todo/:id", deleteTask);

export default router;
