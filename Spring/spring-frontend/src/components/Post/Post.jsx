import React from "react";

const Post = ({ post }) => {
  const { title, category, content } = post;
  console.log("from post:");
  return (
    <div>
      <h3>{title}</h3>
      <p>{category}</p>
      <p>{content}</p>
    </div>
  );
};

export default Post;
