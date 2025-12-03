const Navbar = () => {
  return (
    <nav className="bg-blue-50 p-4 shadow ">
      <div className="flex items-center gap-3 justify-center">
        <img
          src="/to-do-list.gif"
          alt="list"
          className="w-6 h-6 md:w-8 md:h-8"
        />
        <h1 className="text-lg md:text-2xl font-semibold">MyTodoList</h1>
      </div>
    </nav>
  );
};

export default Navbar;
