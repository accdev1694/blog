import { useEffect } from "react";
import Heading from "./Heading";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Time from "./Time";

const Homepage = ({isAuth}) => {
  const [posts, setPosts] = useState([]);
  const collectionsRef = collection(db, "blog");
  const navigate = useNavigate();

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collectionsRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, [collectionsRef]);
  return (
    <>
      <Heading title="Blog Home" />
      <div className="grid grid-cols-2 gap-4 mt-10">
        {posts.map((post) => (
          <div key={post.id} className="flex flex-col items-center gap-2">
            <h1 className="font-bold text-accent text-xl">{post.title}</h1>
            <p>{post.content}</p>
            <p>@{post.author.name}</p>
            <p>{post.createdAt}</p>
            {isAuth && <p className="text-accent border px-6 w-fit font-bold cursor-pointer opacity-[90%] hover:opacity-[100%] hover:rounded-sm">Delete</p>}
            
          </div>
        ))}
      </div>
    </>
  );
};

export default Homepage;
