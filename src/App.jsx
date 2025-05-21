import { useState } from "react";
import "./index.css";
import {
  Link,
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import Write from "./components/Write";
import BlogDetails from "./components/BlogDetails";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const currentLocation = useLocation();
  const navigate = useNavigate();
  const logOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };

  return (
    <>
      {/* Main Page Container */}
      <div className="h-screen px-[10%]  font-secondary pt-4">
        {/* Nav Container */}
        <nav className="flex justify-between align-center border-bottom-accent pb-3">
          <Link
            className="tracking-tighter font-extrabold text-accent text-lg md:text-3xl font-primary"
            to="/"
          >
            Accdev's{" "}
            <span className="text-secondary bg-accent px-3 py-1">Blog</span>
          </Link>
          {/* Navigation Links */}
          <div className="flex justify-center items-center gap-2">
            <Link
              to="/"
              className="text-xs md:text-smpx-1 tracking-wide text-primary font-medium font-primary opacity-80 hover:opacity-100 duration-300 ease-in-out"
            >
              Home
            </Link>
            {!isAuth && currentLocation.pathname !== "/login" ? (
              <Link
                to="/login"
                className="font-semibold text-center text-secondary text-xs md:text-sm  py-1 border border-transparent opacity-80 hover:opacity-100 transition  duration-300 ease-in-out btn-bg-accent  cursor-pointer w-14 md:w-26"
              >
                Log In
              </Link>
            ) : (
              isAuth && (
                <>
                  <Link
                    to="/write"
                    className="font-semibold text-center text-accent text-xs md:text-sm  py-1 border opacity-80 hover:opacity-100 transition  duration-300 ease-in-out  cursor-pointer w-14 md:w-26 "
                  >
                    Write
                  </Link>
                  <button
                    onClick={logOut}
                    className="font-semibold text-center text-secondary text-xs md:text-sm  py-1 border border-transparent opacity-90 hover:opacity-100 transition  duration-300 ease-in-out btn-bg-accent  cursor-pointer w-16 md:w-26"
                  >
                    Log Out
                  </button>
                </>
              )
            )}
          </div>
        </nav>

        <div className="pt-8 align-left md:mt-12 pb-8">
          <Routes>
            <Route path="/" element={<Homepage isAuth={isAuth} />} />
            <Route
              path="/login"
              element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />}
            />
            <Route path="/write" element={<Write isAuth={isAuth} />} />
            <Route path="/blog-details/:id" element={<BlogDetails />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
