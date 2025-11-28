import { useState } from "react";

const EditTaskModal = ({ task, onClose, onUpdate }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleSubmit = () => {
    onUpdate({ ...task, title, description });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">Edit Task</h2>

        <form>
          <input
            type="text"
            value={title}
            placeholder="Task Title"
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl mb-4 shadow-sm
             focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            value={description}
            placeholder="Task Description"
            rows="4"
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
              Edit Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTaskModal;
