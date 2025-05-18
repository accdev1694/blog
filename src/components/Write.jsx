import { useEffect, useState } from "react";
import Heading from "./Heading";
import { addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { collection } from "firebase/firestore";
import { db, auth } from "../../firebase-config";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

const Write = ({ isAuth }) => {
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  const [content, setContent] = useState("**Hello world!**");
  

  const collectionsRef = collection(db, "blog");

  const submitPost = async (e) => {
    e.preventDefault();
    const date = new Date().toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "Europe/London",
    });

    try {
      await addDoc(collectionsRef, {
        title,
        description,
        content,
        author: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        },
        createdAt: date,
      });
      navigate("/");
    } catch (error) {
      console.error("Error occurred: ", error);
    }
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]);
  return (
    <div className="min-h-screen bg-white">
      <Heading heading="Create a Post" />
      <form
        className=" flex items-center flex-col gap-8 mt-8"
        onSubmit={submitPost}
      >
        {/* Post Title */}
        <div className="flex w-full flex-col gap-2">
          <label className="font-bold" htmlFor="title">
            Title:
          </label>
          <input
            className="flex items-center p-2 bg-blue-100/20 placeholder:text-blue-600/30 border border-blue-500/50 focus:outline-none focus:bg-blue-900/10"
            type="text"
            id="title"
            maxLength={70}
            placeholder="Ai in Everything"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Post Description */}
        <div className="flex w-full flex-col gap-2">
          <label className="font-bold" htmlFor="title">
            Description:
          </label>
          <input
            className="flex items-center p-2 bg-blue-100/20 placeholder:text-blue-600/30 border border-blue-500/50 focus:outline-none focus:bg-blue-900/10"
            type="text"
            id="description"
            placeholder="In my view, AI is the future of everything..."
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        {/* Markdown Editor */}
        <div className="w-full gap-2 flex flex-col">
          <label className="font-bold">Content:</label>
          <div className="min-h-[500px] w-full ">
            <MDEditor
              value={content}
            onChange={setContent}
            previewOptions={{
              rehypePlugins: [[rehypeSanitize]],
            }}
            height={500}
            preview="live"
              className="w-full bg-blue-100/20 placeholder:text-blue-600/30 border border-blue-500/50 focus:outline-none focus:bg-blue-900/10"
            />
          </div>
        </div>

        <button
          type="submit"
          className="opacity-90 hover:opacity-100 transition duration-300 ease-in-out btn-bg-accent py-3 w-full text-secondary font-bold"
        >
          SUBMIT POST
        </button>
      </form>
    </div>
  );
};

export default Write;
