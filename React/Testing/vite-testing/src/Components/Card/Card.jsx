import React, { useState } from "react";

const Card = ({ heading, content }) => {
  const [contentHidden, setContentHidden] = useState(true);
  return (
    <div>
      <h2>{heading}</h2>
      <button onClick={() => setContentHidden(!contentHidden)}>
        {contentHidden ? "Show" : "Hide"}
      </button>
      {!contentHidden && <p>{content}</p>}
    </div>
  );
};

export default Card;
