import style from "./ProjectList.module.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";

const ProjectList = ({ projects }) => {
  console.log("renders");
  return (
    <>
      {projects.length > 0 ? (
        <section className={style.list}>
          {projects.map((project, i) => {
            return <ProjectCard key={i} project={project} />;
          })}
        </section>
      ) : (
        <LoadingSpinner />
      )}
      {/* if there data in projects array -> populate section, else Loading.. */}
    </>
  );
};

export default ProjectList;
