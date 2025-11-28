const Navbar = () => {
  return (
    <nav className="bg-blue-50 p-4 font-semibold text-3xl shadow text-center">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded">
          <img src="/to-do-list.gif" alt="list" />
        </div>
        <h1 className="text-xl font-semibold">MyTodoList</h1>
      </div>
    </nav>
  );
};

export default Navbar;
