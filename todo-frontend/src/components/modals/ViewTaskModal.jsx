

const EditTaskModal = ({ task, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white p-4 md:p-6 rounded-lg w-11/12 max-w-xs sm:max-w-sm md:max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">Task Details</h2>

        {/* Form taken from Tailwind CSS docs */}
        <input
          type="text"
          value={task.title}
          disabled
          className="w-full p-3 border border-gray-300 rounded-xl mb-4 bg-gray-100"
        />

        <textarea
          value={task.description}
          disabled
          rows="4"
          className="w-full p-3 border border-gray-300 rounded-xl mb-4 bg-gray-100"
        />

        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
