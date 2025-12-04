

const EditTaskModal = ({ task, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex justify-center items-center z-50">
      <div className="bg-indigo-500 p-4 md:p-6 rounded-lg w-11/12 max-w-xs sm:max-w-sm md:max-w-md shadow-indigo-950 border-2 border-indigo-50">
        <h2 className="text-xl font-bold mb-4 text-center">Task Details</h2>

        {/* Form taken from Tailwind CSS docs */}
        <input
          type="text"
          value={task.title}
          disabled
          className="w-full p-3 border bg-indigo-300 border-gray-300 rounded-xl mb-4 "
        />

        <textarea
          value={task.description}
          disabled
          rows="4"
          className="w-full p-3 border bg-indigo-300 border-gray-300 rounded-xl mb-4 "
        />

        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded shadow-2xl"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
