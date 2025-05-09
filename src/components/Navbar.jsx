import NavItem from "./NavItem";


const Navbar = ({ isLoggedIn }) => {
  return (
    <div className="flex justify-between align-center pt-4">
      <div className="tracking-tighter font-extrabold text-accent text-3xl font-primary">
        <a href="/">Accdev Blog</a>
      </div>
      <div className="flex justify-center items-center gap-4">
        <div className="flex">
          <ul className="flex justify-center items-center">
            <NavItem href="/home" text="Homepage" />           
          </ul>
        </div>
        
        {/* remember to switch TRUE the flag on the log in button */}
        <div className="flex items-center justify-center gap-2">
          {!isLoggedIn && (
            <button className="font-bold text-accent border py-1 w-36 cursor-pointer opacity-80 hover:opacity-100 duration-300 ease-in-out">
              Create Post
            </button>
          )}
          {!isLoggedIn && (
            <button className="font-semibold text-secondary   py-1 border border-transparent opacity-80 hover:opacity-100 transition  duration-300 ease-in-out bg-accent  cursor-pointer w-36">
              Log In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
