import { ToastContainer } from "react-toastify";
import TaskList from "./components/task/TaskList";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";

function App() {

  return (
    <>
      <Navbar />
      <div className="m-10">
        <Home />
        <TaskList />
        <ToastContainer position="top-right" autoClose={500} />
      </div>
    </>
  );
}

export default App
