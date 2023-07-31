import { useState } from "react";
import { createPost } from "../../services/posts";
import { useNavigate } from "react-router-dom";
import styles from "./AddPostForm.module.scss";

const AddPostForm = ({ requestNum, setRequestNum }) => {
  const [newPostData, setNewPostData] = useState({
    title: "",
    content: "",
    category: "",
  });
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault;
    console.log("data to send:", newPostData);
    try {
      if (error) {
        setError(false);
      }
      await createPost(newPostData);
      setRequestNum(requestNum + 1);
      navigate("/"); // go to home after submit
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setNewPostData({ ...newPostData, [id]: value }); // id from tag is key name
  };

  return (
    <div>
      <h2>Add new post</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.Form_Element}>
          <label>Title: </label>
          <input type="text" required id="title" onChange={handleChange} />
        </div>
        <div className={styles.Form_Element}>
          <label>Content: </label>
          <textarea
            cols="30"
            rows="10"
            required
            id="content"
            onChange={handleChange}
          />
        </div>
        <div className={styles.Form_Element}>
          <label>Category: </label>
          <select id="category" onChange={handleChange} required>
            <option value="" hidden>
              select one...
            </option>
            <option>coding</option>
            <option>frontend</option>
            <option>backend</option>
            <option>lifestyle</option>
          </select>
        </div>
        <button type="submit">Add Post</button>
      </form>
      {error && <p>Could not create a post</p>}
    </div>
  );
};

export default AddPostForm;
