import { useTasks } from "../context/TaskContext";
import StatsCard from "../components/cards/StatsCard";
import { List, ListCheck, ListX } from "lucide-react";


const Home = () => {
  const { tasks } = useTasks();

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="p-4 md:p-6 pb-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        <StatsCard
          title="Total Tasks"
          count={totalTasks}
          color="bg-gray-800"
          icon={<List size={40} color="white" />}
        />

        <StatsCard
          title="Completed"
          count={completedTasks}
          color="bg-gray-800"
          icon={<ListCheck size={40} color="white" />}
        />

        <StatsCard
          title="Pending"
          count={pendingTasks}
          color="bg-gray-800"
          icon={<ListX size={40} color="white" />}
        />
      </div>
    </div>
  );
};

export default Home;
