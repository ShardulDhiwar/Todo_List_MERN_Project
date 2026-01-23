import { ListTodo } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-2xl p-4 flex">
      <div className="flex items-center gap-1 justify-center">
        <ListTodo size={32} color="#fff" />
        <h1 className="text-lg text-white md:text-2xl font-semibold">
          MyTodoList
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
