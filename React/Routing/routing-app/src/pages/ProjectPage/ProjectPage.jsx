import { Link } from 'react-router-dom';

const ProjectPage = ({ project }) => {
  const { title, description, techStack, githubLink, deployedLink } = project;
  return (
    <>
      <section>
        <h2>{title}</h2>
        <p>{description}</p>
        <ul>
          {techStack.map((tech, i) => {
            return <li key={i}>{tech}</li>;
          })}
        </ul>
        <Link to={githubLink}>Github</Link>
        <br />
        {deployedLink && <Link to={deployedLink}>Deployed</Link>}
        <br />
        <Link to='/projects'>Back</Link>
      </section>
    </>
  );
};

export default ProjectPage;
