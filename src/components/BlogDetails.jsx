import Heading from "./Heading";
import { useParams } from "react-router-dom";
import { usePromise } from "./usePromise";
import MDEditor from "@uiw/react-md-editor";

const BlogDetails = () => {
  const { posts, loading, error } = usePromise();
  const { id } = useParams();

  // Debug logs
  console.log("Current ID:", id);
  console.log("Posts array:", posts);

  // Handle loading and error states with proper returns
  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">{error}</div>;
  }

  const post = posts.find((post) => post.id === id);

  // Handle post not found
  if (!post) {
    return <div className="text-center py-4">Post Not Found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      <Heading heading={post.title} />
      <div className="mt-8">
        <MDEditor.Markdown source={post.content} />
      </div>
      <div className="flex justify-between items-center mt-6 p-4 text-sm bg-gray-300">
        <p className="">🤖 @{post.author.name}</p>
        <p>⏳ {post.createdAt}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
