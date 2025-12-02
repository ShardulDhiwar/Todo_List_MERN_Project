import { createContext, useContext, useState, useEffect } from "react";
import { getAllTasks } from "../api/api";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTask = async () => {
    const res = await getAllTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, setTasks, fetchTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
