import { useState } from "react";
import "./index.css";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <Router>
      {/* Main Page Container */}
      <div className="h-screen px-36 font-secondary bg-custom pt-4">
        {/* Nav Container */}
        <div className="flex justify-between align-center">
          <Link
            className="tracking-tighter font-extrabold text-accent text-3xl font-primary"
            to="/"
          >
            Accdev Blog
          </Link>
          {/* Navigation Links */}
          <div className="flex justify-center items-center gap-2">
            <Link className="px-1 tracking-wide text-primary font-medium font-primary opacity-80 hover:opacity-100 duration-300 ease-in-out">Home</Link>
            {isLoggedIn ? <Link className="font-bold text-accent text-center text-sm border py-1 w-26 cursor-pointer opacity-80 hover:opacity-100 duration-300 ease-in-out" to="/create">Create Post</Link> : <button className="font-semibold text-secondary text-sm  py-1 border border-transparent opacity-80 hover:opacity-100 transition  duration-300 ease-in-out bg-accent  cursor-pointer w-26">Log In</button>}
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          <Routes>
            <Route path="/"></Route>
            <Route path="/login"></Route>
            <Route path="/create"></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
