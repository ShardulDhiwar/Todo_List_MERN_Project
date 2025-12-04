import React from "react";

const ConfirmDeleteModal = ({ onClose, onDelete }) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex justify-center items-center z-50">
      <div className="bg-indigo-500 p-4 md:p-6 rounded-lg w-11/12 max-w-xs sm:max-w-sm md:max-w-md shadow-indigo-950 border-2 border-indigo-50">
        <h2 className="text-xl font-bold mb-4 text-center text-white">
          Are you sure you want to delete this task??
        </h2>
        <div className="flex justify-evenly gap-3">
          <button
            type="button"
            onClick={onClose}
            className="bg-indigo-600 hover:bg-indigo-400 text-white font-bold py-2 px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded shadow-2xl"
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
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
