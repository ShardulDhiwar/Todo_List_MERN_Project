import { useState } from "react";
import TaskList from "./components/task/TaskList";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="m-10">
        <Home />
        <TaskList />
      </div>
    </>
  );
}

export default App;
