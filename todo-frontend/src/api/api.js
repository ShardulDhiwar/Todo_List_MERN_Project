import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const getAllTasks = () => api.get("/todos");
export const getTask = (id) => api.get(`/todo/${id}`);
export const getCompletedTasks = () => api.get("/todos/completed");
export const getPendingTasks = () => api.get("/todos/pending");

export const createTask = (data) => api.post("/todo", data);
export const updateTask = (id, data) => api.put(`/todo/${id}`, data);
export const deleteTask = (id) => api.delete(`/todo/${id}`);
export const toggleTask = (id) => api.patch(`/todo/${id}/toggle`);