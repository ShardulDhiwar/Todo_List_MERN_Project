import { useState } from "react";
import { toast } from "react-toastify";

const EditTaskModal = ({ task, onClose, onUpdate }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      toast.error("Fields Cannot Be Empty");
      return;
    }

    onUpdate({ ...task, title, description });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-4 md:p-6 rounded-lg w-11/12 max-w-xs sm:max-w-sm md:max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">Edit Task</h2>
        {/* Form taken from Tailwind CSS docs */}
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
