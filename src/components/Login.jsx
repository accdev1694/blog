import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import Heading from "./Heading";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/blog/");
      })
      .catch((err) => {
        console.error(err);
        navigate("/blog/login");
      });
  };
  return (
    <>
      <Heading heading="Sign In with Google" />
      <button
        onClick={signIn}
        className="border py-2 px-6 mt-4 font-bold btn-bg-accent text-secondary cursor-pointer opacity-90 hover:opacity-100 transition  duration-300 ease-in-out"
      >
        Register Here
      </button>
    </>
  );
};

export default Login;
