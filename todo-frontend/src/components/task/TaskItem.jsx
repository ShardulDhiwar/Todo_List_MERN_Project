import React from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";

const TaskItem = ({ task, onToggle, onEdit, onDelete, viewTask }) => {
  return (
    <div
      className="flex flex-col sm:flex-row items-start sm:items-center justify-between 
      bg-indigo-400 border border-sky-200 p-4 rounded-2xl mb-3 shadow-md gap-3"
    >
      {/* Left Part */}
      <div className="flex items-center gap-3 ">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task._id)}
          className="w-5 h-5 accent-indigo-600"
        />

        <div
          className={`flex-1 ${
            task.completed ? "line-through text-indigo-700" : ""
          }`}
        >
          <h3 className="text-base sm:text-lg font-semibold text-white">
            {task.title}
          </h3>

          <p className="text-slate-200 text-sm sm:text-base w-40 sm:w-64 truncate">
            {task.description}
          </p>
        </div>
      </div>

      {/* Right Part */}
      <div className="flex items-center">
        {/* View Button */}
        <button
          className=" text-slate-900 p-2 m-2 rounded-xl hover:text-indigo-200"
          onClick={() => viewTask(task)}
        >
          <Eye className="w-5 h-5" />
        </button>

        {/* Edit Button */}
        <button
          className=" text-slate-900 p-2 m-2 rounded-xl hover:text-indigo-200"
          onClick={() => onEdit(task)}
        >
          <Pencil className="w-5 h-5" />
        </button>

        {/* Delete Button */}
        <button
          className=" text-slate-900 p-2 m-2 rounded-xl hover:text-indigo-200"
          onClick={() => onDelete(task)}
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
