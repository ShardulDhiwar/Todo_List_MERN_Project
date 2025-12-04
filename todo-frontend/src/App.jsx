import { ToastContainer } from "react-toastify";
import TaskList from "./components/task/TaskList";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";

function App() {

  return (
    <div className="min-h-screen bg-indigo-500">
      <Navbar />
      <div className="m-10 mb-0 pb-2.5  ">
        <Home />
        <TaskList />
        <ToastContainer position="top-right" autoClose={500} />
      </div>
    </div>
  );
}

export default App
