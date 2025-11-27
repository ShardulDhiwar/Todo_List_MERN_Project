import TaskItem from "./TaskItem";

const TaskList = () => {
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

  return (
    <>
      <h1 className="text-xl font-semibold m-5 p-2 underline">My Tasks</h1>

      <div className="m-6">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </>
  );
};

export default TaskList;
