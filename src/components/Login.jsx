import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase_config";
import { useNavigate } from "react-router-dom";

const Login = ({isAuth, setIsAuth}) => {
    const navigate = useNavigate()
    const signIn = () => {
        signInWithPopup(auth, provider).then((res)=>{
            localStorage.setItem(isAuth, true)
            setIsAuth(true)
        })
        navigate("/")
    }
  return (
    <div className="mx-36 pt-8 align-left mt-24 border-t">
      <h1 className="font-bold text-primary text-4xl">Sign In with Google</h1>
      <button onClick={signIn} className="border py-2 px-6 mt-4 font-bold bg-accent text-secondary cursor-pointer opacity-80 hover:opacity-100 transition  duration-300 ease-in-out">
        Register Here
      </button>
    </div>
  );
};

export default Login;
