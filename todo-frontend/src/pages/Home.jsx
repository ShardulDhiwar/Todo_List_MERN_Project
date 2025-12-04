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
          color="bg-indigo-400"
          icon={<List size={40} color="#312c85" />}
        />

        <StatsCard
          title="Completed"
          count={completedTasks}
          color="bg-indigo-300"
          icon={<ListCheck size={40} color="#312c85" />}
        />

        <StatsCard
          title="Pending"
          count={pendingTasks}
          color="bg-gray-300"
          icon={<ListX size={40} color="#312c85" />}
        />
      </div>
    </div>
  );
};

export default Home;
