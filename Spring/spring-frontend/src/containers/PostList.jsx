import Post from "../components/Post/Post";

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.length > 0 &&
        posts.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};

export default PostList;
