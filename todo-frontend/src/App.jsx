import { useState } from "react";
import TaskList from "./components/task/TaskList";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import AddTaskModal from "./components/modals/AddTaskModal";

function App() {
  const [openAddModal, setOpenAddModal] = useState(false);

  return (
    <>
      <Navbar />
      <div className="m-10">
        <Home />
        <TaskList />
      </div>
      <div className=" ">
        <button
          onClick={() => setOpenAddModal(true)}
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold w-40 h-15 py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-2xl fixed bottom-12 right-3 z-50"
        >
          + Add Task
        </button>
      </div>

      {/* Modal */}
      {openAddModal && <AddTaskModal onClose={() => setOpenAddModal(false)} />}
    </>
  );
}

export default App;
