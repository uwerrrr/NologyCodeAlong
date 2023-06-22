const getAPIData = async () => {
  const response = fetch("API url/endpoint");
  const data = await response.json();

  console.log(data);

  return data;
};
const form = document.querySelector("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const dataFromAPI= await getAPIData();

  // further processes
});
