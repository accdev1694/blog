import { useState } from "react";
import "./index.css";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import { signOut } from "firebase/auth";
import { auth } from "../firebase_config";
import Write from "./components/Write";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const currentLocation = useLocation();
  const logOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <>
      {/* Main Page Container */}
      <div className="h-screen px-36 font-secondary pt-4">
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
            <Link
              to="/"
              className="px-1 tracking-wide text-primary font-medium font-primary opacity-80 hover:opacity-100 duration-300 ease-in-out"
            >
              Home
            </Link>
            {!isAuth && currentLocation.pathname !== "/login" ? (
              <Link
                to="/login"
                className="font-semibold text-center text-secondary text-sm  py-1 border border-transparent opacity-80 hover:opacity-100 transition  duration-300 ease-in-out bg-accent  cursor-pointer w-26"
              >
                Log In
              </Link>
            ) : (
              isAuth && (
                <>
                <Link className="font-semibold text-center text-accent text-sm  py-1 border opacity-80 hover:opacity-100 transition  duration-300 ease-in-out  cursor-pointer w-26" to="/write">Write</Link>
                  <button
                    onClick={logOut}
                    className="font-semibold text-center text-secondary text-sm  py-1 border border-transparent opacity-90 hover:opacity-100 transition  duration-300 ease-in-out bg-accent  cursor-pointer w-26"
                  >
                    Log Out
                  </button>
                  
                </>
              )
            )}
          </div>
        </div>

        <div className="mx-36 pt-8 align-left mt-24 border-t">
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route
              path="/login"
              element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />}
            ></Route>
            <Route path="/write" element={<Write isAuth={isAuth}/>}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
