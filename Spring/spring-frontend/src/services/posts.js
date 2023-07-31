export const getAllPosts = async () => {
  //// fetch data
  const response = await fetch("http://localhost:8080/posts");
  const data = await response.json();

  //// error handling
  if (!response.ok) {
    throw new Error("Could not get posts");
  }

  return data;
};

export const deletePostById = async (id) => {
  //// delete data by given id
  const response = await fetch("http://localhost:8080/posts/" + 43123, {
    method: "DELETE",
  });

  //// error handling

  if (!response.ok) {
    // const errorData = await response.json();
    // console.log("errorData: ", errorData);
    // throw new Error(errorData.message);
    throw new Error("Could not delete post");
  }
  // should display error message from backend instead of custom error from frontend
};

export const createPost = async (data) => {
  //// create new entry with data
  const response = await fetch("http://localhost:8080/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data), // put data as json in request body
  });

  //// error handling
  if (!response.ok) {
    throw new Error("Could not create post");
  }
};
