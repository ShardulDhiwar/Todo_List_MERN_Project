import React from "react";

const TaskItem = ({ task, onEdit, onDelete, viewTask }) => {
  return (
    <>
      <div className="flex items-start justify-between border-2 border-gray-300 border-opacity-0 p-4 rounded-4xl mb-3 shadow-lg">
        {/* left part */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            className=" w-4 h-4 border-2 border-gray-400 rounded-sm bg-white"
          />
          <div>
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <p className="text-gray-600 text-sm w-250 truncate">
              {task.description}
            </p>
          </div>
        </div>
        {/* Right part */}
        <div>
          <button
            className="bg-green-100 hover:bg-green-600 p-2 m-2 rounded-xl"
            onClick={() => viewTask(task)}
          >
            👁️
          </button>
          <button
            className="bg-blue-100 hover:bg-blue-600 p-2 m-2 rounded-xl"
            onClick={() => onEdit(task)}
          >
            ✏️
          </button>
          <button
            className="bg-red-100 hover:bg-red-600 p-2 m-2 rounded-xl"
            onClick={() => onDelete(task)}
          >
            🗑️
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskItem;
