import styles from "./Post.module.scss";
import { deletePostById, getAllPosts } from "../../services/posts";

const Post = ({ post, requestNum, setRequestNum }) => {
  const { id, title, category, content } = post;

  const handleDelete = async () => {
    try {
      await deletePostById(id);
      setRequestNum(requestNum + 1);
      console.log("deleted");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.Post}>
      <h3>{title.toUpperCase()}</h3>
      <p>{category}</p>
      <p>{content}</p>
      <button onClick={handleDelete}>Delete Post</button>
    </div>
  );
};

export default Post;
