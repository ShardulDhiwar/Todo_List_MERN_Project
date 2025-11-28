import { useState } from "react";
import Draggable from 'react-draggable'
import TaskList from "./components/task/TaskList";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import AddTaskModal from "./components/modals/AddTaskModal";

import { Rnd } from "react-rnd";

function App() {
  const [openAddModal, setOpenAddModal] = useState(false);

  return (
    <>
      <Navbar />
      <div className="m-10">
        <Home />
        <TaskList />
      </div>

      {/* DRAGGABLE ADD TASK BUTTON */}
      <Rnd
        default={{
          x: window.innerWidth - 180, // initial right position
          y: window.innerHeight - 120, // initial bottom position
          width: 140,
          height: 50,
        }}
        bounds="window"
        enableResizing={false}
        style={{ zIndex: 9999, position: "fixed" }} // ensures RND keeps position
      >
        <button
          onClick={() => setOpenAddModal(true)}
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold w-40 h-15 py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-2xl bottom-12 right-3"
        >
          + Add Task
        </button>
      </Rnd>

      {/* MODAL */}
      {openAddModal && <AddTaskModal onClose={() => setOpenAddModal(false)} />}
    </>
  );
}

export default App
