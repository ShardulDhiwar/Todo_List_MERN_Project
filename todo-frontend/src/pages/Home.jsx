import { useTasks } from "../context/TaskContext";
import StatsCard from "../components/cards/StatsCard";

const Home = () => {
  const { tasks } = useTasks();

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="p-6 pb-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Total Tasks"
          count={totalTasks}
          color="bg-blue-50"
          icon="📘"
        />

        <StatsCard
          title="Completed"
          count={completedTasks}
          color="bg-green-50"
          icon="✔️"
        />

        <StatsCard
          title="Pending"
          count={pendingTasks}
          color="bg-purple-100"
          icon="📂"
        />
      </div>
    </div>
  );
};

export default Home;
