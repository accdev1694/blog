import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase-config";
const BlogList = ({posts, isAuth}) => {

  return (
    <div className="grid grid-cols-2 gap-12 mt-10 ">
      {posts.map((post) => (
        <Link
          className="flex flex-col bg-custom  text-left p-4 cursor-pointer opacity-80 hover:opacity-100 hover:rounded-lg transition duration-300 ease-in-out hover:bg-transparent border border-light shadow-lg"
          key={post.id}
          to={`blog-details/${post.id}`}
        >
          {/* Post Title and Content */}
          <h1 className="font-bold text-accent text-lg font-primary">
            {post.title.toUpperCase()}
          </h1>
          {post.preview}

          <div className="w-full flex justify-between mt-6 ">
            <div className="">
              {/* Post Author and Date */}
              <p className="w-full text-left text-xs mt-2">
                🤖 @{post.author.name}
              </p>
              <p className="w-full text-left text-xs font-bold">
                ⏳ {post.createdAt}
              </p>
            </div>
            {/* Post Delete Button */}
            {isAuth && post.author.id === auth.currentUser.uid && (
              <button
                // onClick={() => deletePost(post.id)}
                className="mt-4 text-accent border px-6 w-fit font-bold cursor-pointer opacity-[90%] hover:opacity-[100%] hover:rounded-sm"
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
