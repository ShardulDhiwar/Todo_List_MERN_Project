import { ListChecks } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-indigo-700 text-slate-800 shadow-2xl p-4 flex">
      <div className="flex items-center gap-1 justify-center">
        <ListChecks size={32} color="#fff" />
        <h1 className="text-lg text-white md:text-2xl font-semibold">
          MyTodoList
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
