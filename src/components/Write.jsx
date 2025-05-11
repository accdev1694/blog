import { useEffect, useState } from "react";
import Heading from "./Heading";
import { addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { collection } from "firebase/firestore";
import { db, auth } from "../../firebase_config";


const Write = ({isAuth}) => {
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const collectionsRef = collection(db, "blog")

  const submitPost = async (e) => {
    e.preventDefault();
    console.log(e);
    try {
      await addDoc(collectionsRef, {
        title,
        content,
        author: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        },
        createdAt: new Date().toISOString(),
      });
      console.log('successfully saved');
      
      navigate("/");
    } catch (error) {
      console.error("Error occured: ", error);
    }
  };
  
  useEffect(()=>{
    if(!isAuth){
      navigate("/login")
    }
  },[isAuth, navigate])
  return (
    <div className="">
      <Heading title="Create a Post" />
      <form
        
        className="mx-36 flex items-center flex-col gap-8 mt-8"
        onSubmit={submitPost}
      >
        {/* Post Title */}
        <div className="flex w-full flex-col gap-2">
          <label className="font-bold" htmlFor="title">
            Title:
          </label>
          <input
            className="flex items-center p-2 bg-blue-100/20 placeholder:text-blue-600/20 border border-blue-500/50 focus:outline-none focus:bg-blue-900/10"
            type="text"
            id="title"
            placeholder="Ai in Everything"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        {/* Post content */}
        <div className="w-full gap-2 flex flex-col">
          <label className="  font-bold" htmlFor="content">
            Content:
          </label>
          <textarea
            className="h-50 p-2 bg-blue-100/20 placeholder:text-blue-600/20 border border-blue-500/50 focus:outline-none focus:bg-blue-900/10"
            type="text"
            id="content"
            placeholder="Is Ai really taking our jobs? In my opinion . . ."
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="opacity-90 hover:opacity-100 transition duration-300 ease-in-out bg-accent py-3 w-full text-secondary font-bold"
        >
          SUBMIT POST
        </button>
      </form>
    </div>
  );
};

export default Write;
