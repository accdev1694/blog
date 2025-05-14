import Heading from "./Heading";
import BlogList from "./BlogList";
import {usePromise} from "./usePromise";
// import { useNavigate } from "react-router-dom";

const Homepage = ({isAuth}) => {
  const {posts, loading, error} = usePromise();
  loading && <p>Loading...</p>;
  error && <p>{error}</p>;
  // console.log(posts);
  
  
    
  
  // const navigate = useNavigate();

  

  // const deletePost = async (id) => {
  //   const postDoc = doc(db, "blog", id);
  //   await deleteDoc(postDoc);
  // };
  return (
    <>      
      <Heading heading="Blog Home" />
      <BlogList posts={posts} isAuth={isAuth} />
    </>
  );
};

export default Homepage;
