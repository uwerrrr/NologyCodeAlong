import { useEffect, useState } from "react";
import "./App.css";
import "./services/posts";
import { getAllPosts } from "./services/posts";
import PostList from "./containers/PostList/PostList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPostForm from "./components/AddPostForm/AddPostForm";
import Nav from "./components/Nav/Nav";

function App() {
  const [posts, setPosts] = useState([]);
  const [requestNum, setRequestNum] = useState(0);

  // get all data whenever requestNum state is changed
  useEffect(() => {
    getAllPosts().then((res) => {
      setPosts(res);
      setRequestNum(setRequestNum + 1);
      console.log(res);
    });
  }, [requestNum]);

  return (
    <>
      <BrowserRouter>
        <Nav />
        <h1>Developers's blog</h1>
        <Routes>
          <Route
            path="/"
            element={
              <PostList
                posts={posts}
                requestNum={requestNum}
                setRequestNum={setRequestNum}
              />
            }
          />

          <Route
            path="/add-post"
            element={
              <AddPostForm
                requestNum={requestNum}
                setRequestNum={setRequestNum}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
