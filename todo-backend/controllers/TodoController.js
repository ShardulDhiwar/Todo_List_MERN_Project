import TodoModel from "../models/TodoModel.js";

export const getAllTasks = async (req, res) => {
    try {
        const todos = await TodoModel.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getTaskById = async (req, res) => {
    try {
        const {id} = req.params
        const todos = await TodoModel.findById(id);
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


export const createTask = async (req, res) => {
    try {
        const todo = await TodoModel.create(req.body);
        res.status(201).json(todo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const updateTask = async (req, res) => {
    try {
        const {id} = req.params
        const todos = await TodoModel.findByIdAndUpdate(id);
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params
        await TodoModel.findByIdAndDelete(id);
        res.json({ message: "Todo deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}