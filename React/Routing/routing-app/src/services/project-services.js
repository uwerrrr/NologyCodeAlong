import projects from "../data/projects.json";

//// if we really want to simulate network requests we can use set timeout
//// this is good for practicing loading states
// export const getAllProjects = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(projects);
//     }, 1000);
//   });
// };

//// simple way of doing this if we don't care about loading state
// export const getAllProjects = async () => {
//   return projects;
// };

//// faking an error or value after time
// export const getProjectById = (id) => {
//   const project = projects.find((project) => project.id === id);

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (project) {
//         return resolve(project);
//       }
//       reject(new Error(`Project with id : ${id} does not exist`));
//     }, 1000);
//   });
// };

// REAL REQUESTS

export const getAllProjects = async () => {
  const response = await fetch("http://localhost:3000/projects");
  const projects = await response.json();
  return projects;
};

export const getProjectById = async (id) => {
  const response = await fetch(`http://localhost:3000/projects/${id}`);
  if (!response.ok) {
    throw new Error(`Project with id : ${id} does not exist`);
  }
  const project = await response.json();
  return project;
};
