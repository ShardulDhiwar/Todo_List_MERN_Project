import React from "react";

const ConfirmDeleteModal = ({ onClose, onDelete }) => {
  return (
    <div className="fixed inset-0 bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-4 md:p-6 rounded-lg w-11/12 max-w-xs sm:max-w-sm md:max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">
          Are you sure you want to delete this task??
        </h2>
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            Cancel
          </button>

          <button
            type="submit"
            onClick={() => {
              onDelete();
              onClose();
            }}
            className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
          >
            Delete Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
