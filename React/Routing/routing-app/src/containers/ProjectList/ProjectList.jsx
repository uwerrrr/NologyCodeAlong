import style from './ProjectList.module.scss';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const ProjectList = ({ projects }) => {
 
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
    </>
  );
};

export default ProjectList;
