import { Link } from "react-router-dom";
import { auth } from "../../firebase-config";
import { db } from "../../firebase-config";
import { deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const BlogList = ({ posts, isAuth }) => {
  const navigate = useNavigate();
  const deletePost = async (id) => {
    const postDoc = doc(db, "blog", id);
    await deleteDoc(postDoc);
    navigate("/blog/");
  };

  

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
      {posts.map((post) => (
        <Link
          className="h-60 md:h-52 flex flex-col text-left p-4 cursor-pointer opacity-80 hover:opacity-100 hover:rounded-lg transition duration-300 ease-in-out hover:bg-transparent  border-accent-light shadow-lg"
          key={post.id}
          to={`/blog/blog-details/${post.id}`}
        >
          {/* Post Title and Description */}
          <h1 className="font-bold text-accent text-md font-primary">
            {post.title.toUpperCase()}
          </h1>
          <h3 className="text-primary text-xs font-primary mt-2 flex-1">
            {post.description.length > 100
              ? post.description.slice(0, 100) + "..."
              : post.description}
          </h3>

          <div className="w-full flex justify-between ">
            <div className="">
              {/* Post Author and Date */}
              <p className="w-full text-left text-[10px] mt-2">
                🤖 @{post.author.name}
              </p>
              <p className="w-full text-left text-[10px] font-bold">
                ⏳ {post.createdAt}
              </p>
            </div>
            {/* Post Delete Button */}
            {isAuth && post.author.id === auth.currentUser.uid && (
              <button
                onClick={() => deletePost(post.id)}
                className="mt-4 text-accent border px-6 w-fit font-bold cursor-pointer opacity-[90%] hover:opacity-[100%] hover:rounded-sm text-xs"
              >
                Delete
              </button>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
