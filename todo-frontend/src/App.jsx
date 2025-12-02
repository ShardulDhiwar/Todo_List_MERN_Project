import { useState } from "react";
import Draggable from 'react-draggable'
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
      </div>
    </>
  );
}

export default App
