import Heading from "./Heading";
import BlogList from "./BlogList";
import {usePromise} from "./usePromise";
// import { useNavigate } from "react-router-dom";

const Homepage = ({isAuth}) => {
  const {posts, loading, error} = usePromise();
  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }
  if (error) {
    return <div className="text-center py-4 text-red-500">{error}</div>;
  }
  
  
  
    
  

  return (
    <>      
      <Heading heading="Blog Home" />
      <BlogList posts={posts} isAuth={isAuth} />
    </>
  );
};

export default Homepage;
