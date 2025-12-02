import { useState } from "react";
import { createTask } from "../../api/api";

const AddTaskModal = ({ onClose, refresh }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) return;

    await createTask({ title, description, completed: false });
    refresh();
    onClose(); // close modal
  };

  return (
    <div className="fixed inset-0 bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">Add New Task</h2>

        <form>
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl mb-4 shadow-sm
             focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Task Description"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl mb-4 shadow-sm
             focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
