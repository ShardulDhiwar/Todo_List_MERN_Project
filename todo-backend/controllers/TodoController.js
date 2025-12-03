import TodoModel from "../models/TodoModel.js";

// get all tasks
export const getAllTasks = async (req, res) => {
    try {
        const todos = await TodoModel.find().sort({ createdAt: -1 });
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// get a specific task
export const getTaskById = async (req, res) => {
    try {
        const {id} = req.params
        const todos = await TodoModel.findById(id);
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Create a task 
export const createTask = async (req, res) => {
    try {
        const todo = (await TodoModel.create(req.body));
        res.status(201).json(todo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Edit a task 
export const updateTask = async (req, res) => {
    try {
        const { id } = req.params
        const todos = await TodoModel.findByIdAndUpdate(id, req.body, {new:true});
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Toggle Completion Status 
export const toggleStatus = async (req, res) => {
    try {
        const { id } = req.params;

        const task = await TodoModel.findById(id);
        if (!task) return res.status(404).json({ message: "Task not found" });

        task.completed = !task.completed;
        await task.save();

        res.json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a task 
export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params
        await TodoModel.findByIdAndDelete(id);
        res.json({ message: "Todo deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}