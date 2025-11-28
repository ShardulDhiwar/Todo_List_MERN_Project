import { useState } from "react";
import ConfirmDeleteModal from "../modals/ConfirmDeleteModal";
import EditTaskModal from "../modals/EditTaskModal";
import ViewTaskModel from "../modals/ViewTaskModal";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openViewDetails, setOpenViewDetails] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const tasks = [
    {
      id: 1,
      title: "Study React",
      description: "Complete custom hooks",
      completed: false,
    },
    {
      id: 2,
      title: "Buy groceries",
      description: "Buy milk from grocery shop",
      completed: true,
    },
    {
      id: 3,
      title: "Study React",
      description: "Complete custom hooks",
      completed: false,
    },
    {
      id: 4,
      title: "Buy groceries",
      description: "Buy milk from grocery shop",
      completed: true,
    },
    {
      id: 5,
      title: "Study React",
      description: "Complete custom hooks",
      completed: false,
    },
    {
      id: 6,
      title: "Buy groceries",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus accusantium doloribus laudantium dolores quia veniam eligendi tempore suscipit possimus, at est sed cupiditate tenetur illo! Hic eligendi ipsam sint rem deserunt consectetur eius quidem quam molestiae suscipit voluptates quae, quis, laborum iusto alias voluptas veritatis. Reiciendis voluptatum earum beatae totam. Buy milk from grocery shop Lorem ipsum dolor sit amet consectetur adipisicLorem ipsum dolor sit amet consectetur adipisicing elit",
      completed: true,
    },
  ];

  const handleEdit = (task) => {
    setSelectedTask(task);
    setOpenEditModal(true);
  };

  const handleDelete = (task) => {
    setSelectedTask(task);
    setOpenDeleteModal(true);
  };

  const handleView = (task) => {
    setSelectedTask(task)
    setOpenViewDetails(true);
  };

  return (
    <>
      <h1 className="text-xl text-center font-semibold mx-5 mt-4 p-4 pb-0 ">{} Tasks</h1>

      <div className="m-6">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={handleEdit}
            onDelete={handleDelete}
            viewTask={handleView}
          />
        ))}
      </div>

      {/* View Modal */}
      {openViewDetails && (
        <ViewTaskModel
          task={selectedTask}
          onClose={() => setOpenViewDetails(false)}
          viewTask={(updated) => console.log(updated)}
        />
      )}

      {/* Edit Modal */}
      {openEditModal && (
        <EditTaskModal
          task={selectedTask}
          onClose={() => setOpenEditModal(false)}
          onUpdate={(updated) => console.log(updated)}
        />
      )}

      {/* Delete Modal */}
      {openDeleteModal && (
        <ConfirmDeleteModal
          onClose={() => setOpenDeleteModal(false)}
          onDelete={() => console.log("Deleting:", selectedTask)}
        />
      )}
    </>
  );
};

export default TaskList;
