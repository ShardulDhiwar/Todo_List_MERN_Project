import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const getTodos = () => api.get("/todos");
export const getTodoByID =  () => api.get("/todo/${id}");
export const createTodo = () => api.get("/todo", data);
export const updateTodo = () => api.get("/todo/${id}", data);
export const deleteTodo = () => api.get("/todo/${id}");

