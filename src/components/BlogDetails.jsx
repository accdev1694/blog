import Heading from "./Heading";
import { useParams, useNavigate } from "react-router-dom";
import { usePromise } from "./usePromise";
import MDEditor from "@uiw/react-md-editor";


const BlogDetails = () => {
  const navigate = useNavigate();
  // Fetch posts using a custom hook
  const { posts, loading, error } = usePromise();
  const { id } = useParams();

 

  // Handle loading and error states with proper returns
  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  if (error) {
    console.error("Error fetching posts:", error);
    navigate("/blog/");
    return null;
  }

  const post = posts.find((post) => post.id === id);

  // Handle post not found
  if (!post) {
    navigate("/blog/");
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen max-w-4xl mx-auto py-8">
      <Heading heading={post.title} />
      <div className="mt-8 flex-1">
        <MDEditor.Markdown  source={post.content} className="tracking-wide" />
      </div>
      <div className="flex justify-between items-center mt-6 p-2 text-sm border-accent bg-accent-light">
        <p className="text-[10px]">🤖 @{post.author.name}</p>
        <p className="text-[10px]">⏳ {post.createdAt}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
