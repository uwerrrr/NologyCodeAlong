import { useEffect, useState } from "react";
import "./App.css";
import "./services/posts";
import { getAllPosts } from "./services/posts";
import PostList from "./containers/PostList";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then((res) => {
      setPosts(res);
      console.log(res);
    });
  }, []);

  return (
    <>
      <h1>Developers's blog</h1>
      <PostList posts={posts} />
    </>
  );
}

export default App;
