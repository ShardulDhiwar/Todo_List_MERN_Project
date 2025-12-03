import { createContext, useContext, useReducer, useEffect, useState } from "react";
import { getAllTasks } from "../api/api";

const TaskContext = createContext();

const taskReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASKS":
      return action.payload;

    case "ADD_TASK":
      return [action.payload, ...state];

    case "DELETE_TASK":
      return state.filter((t) => t._id !== action.payload);

    case "TOGGLE_TASK":
      return state.map((t) =>
        t._id === action.payload ? { ...t, completed: !t.completed } : t
      );

    case "UPDATE_TASK":
      return state.map((t) =>
        t._id === action.payload._id ? action.payload : t
      );

    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [loading, setLoading] = useState(false);

  const fetchTask = async () => {
    setLoading(true)
    try {
      const res = await getAllTasks();
      dispatch({ type: "SET_TASKS", payload: res.data });
    } catch (error) {
      console.log("Error fetching task", error);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch, loading }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
