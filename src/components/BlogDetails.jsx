import BlogList from "./BlogList";
import Heading from "./Heading"
import { useParams } from "react-router-dom";
import {usePromise} from "./usePromise";

const BlogDetails = () => {
const {posts, loading, error} = usePromise();
const { id } = useParams();

 // Debug logs
  console.log('Current ID:', id);
  console.log('Posts array:', posts);

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
    <div className="">
       
      {/* <BlogList /> */}
      <Heading heading={post.title} />
      <p className="mt-4 mx-4">
        {post.content}
      </p>
      <div className="flex justify-between items-center mt-4 mx-4 w-full">
        <p className="font-bold text-accent">🤖 @{post.author.name}</p>
        <p className="font-bold text-accent">⏳ {post.createdAt}</p>
        
      </div>
    </div>
  );
};

export default BlogDetails;
