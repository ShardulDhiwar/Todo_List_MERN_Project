import { useState } from "react";
import ConfirmDeleteModal from "../modals/ConfirmDeleteModal";
import EditTaskModal from "../modals/EditTaskModal";
import ViewTaskModel from "../modals/ViewTaskModal";
import AddTaskModal from "../modals/AddTaskModal";
import { useTasks } from "../../context/TaskContext";
import { useMediaQuery } from "react-responsive";
import { Rnd } from "react-rnd";
import TaskItem from "./TaskItem";

import { deleteTask, toggleTask, updateTask } from "../../api/api";
import { toast } from "react-toastify";

const TaskList = () => {
  const { tasks, dispatch, loading } = useTasks();
  const isMobile = useMediaQuery({ maxWidth: 640 });

  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openViewDetails, setOpenViewDetails] = useState(false);

  const [selectedTask, setSelectedTask] = useState(null);

  //  Toggle task
  const handleToggle = async (id) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
    try {
      await toggleTask(id);
      toast.success("Completion Status Updated Sucessfully");
    } catch (err) {
      toast.error("Cannot Able to Mark this Complete");
      console.log("Toggle failed");
    }
  };

  // Edit Task
  const handleEdit = (task) => {
    setSelectedTask(task);
    setOpenEditModal(true);
  };

  const handleUpdate = async (updatedTask) => {
    dispatch({ type: "UPDATE_TASK", payload: updatedTask });

    try {
      await updateTask(updatedTask._id, updatedTask);
      toast.success("Task Updated Successfully");
    } catch (err) {
      toast.error("Failed Updating Task");
    }
  };

  // Delete task
  const handleDelete = (task) => {
    setSelectedTask(task);
    setOpenDeleteModal(true);
  };

  const confirmDelete = async () => {
    dispatch({ type: "DELETE_TASK", payload: selectedTask._id });

    try {
      await deleteTask(selectedTask._id);
      toast.success("Task Deleted Successfully");
    } catch (err) {
      toast.error("Failed Deleting Tasm");
      console.log("Delete failed");
    }

    setOpenDeleteModal(false);
  };

  // View task
  const handleView = (task) => {
    setSelectedTask(task);
    setOpenViewDetails(true);
  };

  return (
    <>
      <h1 className="text-lg sm:text-xl text-center font-semibold mx-2 mt-4 p-4 pb-0">
        {tasks.length} Tasks
      </h1>

      <div className="m-6">
        {loading ? (
          <div className="text-center text-2xl py-10">Loading tasks...</div>
        ) : tasks.length === 0 ? (
          <div className="text-center py-10 text-gray-500">No tasks yet</div>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              onToggle={handleToggle}
              onEdit={handleEdit}
              onDelete={handleDelete}
              viewTask={handleView}
            />
          ))
        )}
      </div>

      {/* View Modal  */}
      {openViewDetails && (
        <ViewTaskModel
          task={selectedTask}
          onClose={() => setOpenViewDetails(false)}
        />
      )}

      {/* Edit Modal */}
      {openEditModal && (
        <EditTaskModal
          task={selectedTask}
          onClose={() => setOpenEditModal(false)}
          onUpdate={handleUpdate}
        />
      )}

      {/* Delete Modal */}
      {openDeleteModal && (
        <ConfirmDeleteModal
          onClose={() => setOpenDeleteModal(false)}
          onDelete={confirmDelete}
        />
      )}

      {/* <button
        onClick={() => {
          setOpenAddModal(true);
        }}
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold w-full h-full py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-2xl"
      >
        + Add Task
      </button> */}

      {/* ChatGPT code: For making the button draggable  */}
      {/* DRAGGABLE ADD TASK BUTTON */}
      {isMobile ? (
        // 🔹 Mobile → NO DRAGGING
        <button
          onClick={() => setOpenAddModal(true)}
          className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-5 rounded-full shadow-lg"
        >
          + Add Task
        </button>
      ) : (
        // 🔹 Desktop → DRAGGABLE
        <Rnd
          default={{
            x: window.innerWidth - 250,
            y: window.innerHeight - 250,
            width: 160,
            height: 50,
          }}
          bounds="window"
          enableResizing={false}
          style={{ zIndex: 9999, position: "fixed" }}
        >
          <button
            onClick={() => setOpenAddModal(true)}
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold w-full h-full py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-2xl"
          >
            + Add Task
          </button>
        </Rnd>
      )}

      {openAddModal && (
        <AddTaskModal
          onClose={() => setOpenAddModal(false)}
          dispatch={dispatch}
        />
      )}
    </>
  );
};

export default TaskList;
