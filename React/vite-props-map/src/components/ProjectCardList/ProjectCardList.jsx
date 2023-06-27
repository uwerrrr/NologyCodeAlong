import style from "./ProjectCardList.module.scss";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectCardList = (props) => {
  const { projects } = props;
  // projects is an Array of Obj

  return (
    <section className={style.list}>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </section>
  );
};

export default ProjectCardList;
