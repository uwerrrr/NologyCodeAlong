import Post from "../../components/Post/Post";
import styles from "./PostsList.module.scss";

const PostsList = ({ posts, setRequestNum, requestNum }) => {
  return (
    // <div className={styles.Wrapper}>
    <div className={styles.PostsList}>
      {posts.length > 0 &&
        posts.map((post) => {
          return (
            <Post
              key={post.id}
              post={post}
              requestNum={requestNum}
              setRequestNum={setRequestNum}
            />
          );
        })}
    </div>
    // </div>
  );
};

export default PostsList;
