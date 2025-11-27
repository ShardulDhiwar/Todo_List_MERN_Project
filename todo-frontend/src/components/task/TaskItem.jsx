import React from "react";

const TaskItem = ({ task }) => {
  return (
    <>
      <div className="flex items-start justify-between p-4 rounded-4xl mb-3 shadow-lg border-y-teal-600">
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
          <button className="bg-green-100 hover:bg-green-600 p-2 m-2 rounded-xl">
            👁️
          </button>
          <button className="bg-blue-100 hover:bg-blue-600 p-2 m-2 rounded-xl">
            ✏️
          </button>
          <button className="bg-red-100 hover:bg-red-600 p-2 m-2 rounded-xl">
            🗑️
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskItem;
