import ProjectCardList from "./components/ProjectCardList/ProjectCardList";
import projects from "./data.json";

function App() {
  console.log(projects);
  return (
    <>
      <ProjectCardList projects={projects} />
      {/* projects is an Array of Obj */}
      {/* projects={projects} -> pass*/}
    </>
  );
}

export default App;
