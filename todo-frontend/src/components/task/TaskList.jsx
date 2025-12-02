import { useState, useEffect } from "react";
import ConfirmDeleteModal from "../modals/ConfirmDeleteModal";
import EditTaskModal from "../modals/EditTaskModal";
import ViewTaskModel from "../modals/ViewTaskModal";
import AddTaskModal from "../modals/AddTaskModal";
import { Rnd } from "react-rnd";
import TaskItem from "./TaskItem";

import { getAllTasks, deleteTask, toggleTask, updateTask } from "../../api/api";
import { useTasks } from "../../context/TaskContext";

const TaskList = () => {
  const { tasks, setTasks, fetchTask } = useTasks();

  const [loading, setLoading] = useState(false);

  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openViewDetails, setOpenViewDetails] = useState(false);

  const [selectedTask, setSelectedTask] = useState(null);

  // Fetching tasks
  // const fetchTask = async () => {
  //   try {
  //     setLoading(true);
  //     const res = await getAllTasks();
  //     setTasks(res.data);
  //   } catch (err) {
  //     console.log("Error Fetching Tasks", err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    fetchTask();
  }, []);

  // handling the completion status
  const handleToggle = async (id) => {
    await toggleTask(id);
    fetchTask();
  };

  // ChatGPT CODE: Because It's above code refreshes the page after toggling the Checkbox 

  // const handleToggle = async (id) => {
  //   setTasks((prev) =>
  //     prev.map((task) =>
  //       task._id === id ? { ...task, completed: !task.completed } : task
  //     )
  //   );

  //   try {
  //     await toggleTask(id); 
  //   } catch (error) {
  //     console.error("Failed to toggle task", error);
  //     fetchTask(); 
  //   }
  // };


  // Edit modal
  const handleEdit = (task) => {
    setSelectedTask(task);
    setOpenEditModal(true);
  };

  // updatiung the task
  const handleUpdate = async (updatedTask) => {
    await updateTask(updatedTask._id, updatedTask);
    fetchTask();
  };

  // Delete modal
  const handleDelete = (task) => {
    setSelectedTask(task);
    setOpenDeleteModal(true);
  };

  // Deletting the task
  const confirmDelete = async () => {
    await deleteTask(selectedTask._id);
    setOpenDeleteModal(false);
    fetchTask();
  };

  // View Details Modal
  const handleView = (task) => {
    setSelectedTask(task);
    setOpenViewDetails(true);
  };

  return (
    <>
      <h1 className="text-xl text-center font-semibold mx-5 mt-4 p-4 pb-0 ">
        {tasks.length} Tasks
      </h1>

      <div className="m-6">
        {loading ? (
          <div className="text-center py-10">Loading tasks...</div>
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
          refresh={fetchTask}
        />
      )}

      {/* Delete Modal */}
      {openDeleteModal && (
        <ConfirmDeleteModal
          onClose={() => setOpenDeleteModal(false)}
          onDelete={confirmDelete}
          refresh={fetchTask}
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
          onClick={() => {
            setOpenAddModal(true);
          }}
          // Got this from Tailwind website 
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold w-full h-full py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-2xl"
        >
          + Add Task
        </button>
      </Rnd>

      {openAddModal && (
        <AddTaskModal
          onClose={() => setOpenAddModal(false)}
          refresh={fetchTask}
        />
      )}
    </>
  );
};

export default TaskList;
