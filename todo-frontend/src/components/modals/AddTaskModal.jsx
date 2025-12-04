import { useState } from "react";
import { createTask } from "../../api/api";
import { useTasks } from "../../context/TaskContext";
import { toast } from "react-toastify";

const AddTaskModal = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { dispatch } = useTasks();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      toast.error("Fields Cannot Be Empty");
      return;
    }
    try {
      const res = await createTask({
        title,
        description,
        completed: false,
      });
      dispatch({ type: "ADD_TASK", payload: res.data });
      toast.success("Item Added Succesfully");
      onClose();
    } catch (error) {
      toast.error("Failed To Add Tasm");
      console.log("Add task failed", err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex justify-center items-center z-50">
      <div className="bg-indigo-500 p-4 md:p-6 rounded-lg w-11/12 max-w-xs sm:max-w-sm md:max-w-md shadow-indigo-950 border-2 border-indigo-50">
        <h2 className="text-xl text-white font-bold mb-4 text-center">
          Add New Task
        </h2>
        {/* Form taken from Tailwind CSS docs */}
        <form>
          <input
            type="text"
            placeholder="Task Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border bg-indigo-300 border-gray-300 rounded-xl mb-4 shadow-sm
             focus:outline-none focus:ring-2 focus:ring-indigo-400 "
          />
          <textarea
            placeholder="Task Description..."
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border bg-indigo-300 border-gray-300 rounded-xl mb-4 shadow-sm
             focus:outline-none focus:ring-2 focus:ring-indigo-400 "
          />

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded shadow-2xl"
            >
              Cancel
            </button>

            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-indigo-600 hover:bg-indigo-400 text-white font-bold py-2 px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded shadow-2xl"
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
