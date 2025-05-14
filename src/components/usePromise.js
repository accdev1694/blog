import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase-config";

export const usePromise = ()=>{
    const [posts, setPosts] = useState([]);
    const[loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    

    useEffect(() => {
        const getPosts = async () => {
          try {
            setLoading(true)
            const collectionsRef = collection(db, "blog");
            const data = await getDocs(collectionsRef);
            const formattedPosts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setPosts(formattedPosts);
          } catch (error) {
            setError(error.message)
          } finally {
            setLoading(false)
          }
          
        };
        getPosts();
        console.log(posts);
        
      }, []);
      return { posts, loading, error };
}
