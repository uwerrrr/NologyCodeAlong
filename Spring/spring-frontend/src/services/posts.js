export const getAllPosts = async () => {
  // fetch data
  const response = await fetch("http://localhost:8080/posts");
  const data = await response.json();
  return data;
};
