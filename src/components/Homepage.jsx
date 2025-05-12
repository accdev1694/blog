import { useEffect } from "react";
import Heading from "./Heading";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "../../firebase-config";
// import { useNavigate } from "react-router-dom";

const Homepage = ({ isAuth }) => {
  const [posts, setPosts] = useState([]);
  const collectionsRef = collection(db, "blog");
  // const navigate = useNavigate();

  
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collectionsRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, [collectionsRef]);

  const deletePost = async (id) => {
  const postDoc = doc(db, "blog", id)
  await deleteDoc(postDoc)
  }
  return (
    <>
      <Heading title="Blog Home" />
      <div className="grid grid-cols-2 gap-12 mt-10 ">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col bg-custom  text-left p-4 cursor-pointer opacity-80 hover:opacity-100 hover:rounded-lg transition duration-300 ease-in-out hover:bg-transparent border border-light shadow-lg"
          >
            <h1 className="font-bold text-accent text-lg font-primary">{post.title.toUpperCase()}</h1>
            <p className="mt-2 ">{`${post.content.slice(0, 150)}...`}</p>
            <div className="w-full flex justify-between mt-6 ">
              <div className="">
                <p className="w-full text-left text-xs mt-2">
                  🤖 @{post.author.name}
                </p>
                <p className="w-full text-left text-xs font-bold">
                ⏳ {post.createdAt}
                </p>
              </div>

              {isAuth && post.author.id === auth.currentUser.uid && (
                <button onClick={()=>deletePost(post.id)} className="mt-4 text-accent border px-6 w-fit font-bold cursor-pointer opacity-[90%] hover:opacity-[100%] hover:rounded-sm">
                  Delete
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Homepage;
