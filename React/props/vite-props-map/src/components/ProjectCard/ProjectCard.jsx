import style from './ProjectCard.module.scss';
const ProjectCard = ({ project }) => {
  const { title, description, deployedLink, githubLink, techStack } = project;

  // using arrays
  // const cardClasses = [style.card];

  // if (techStack.find((tech) => tech === 'React')) {
  //   cardClasses.push(style.grey__background);
  // }

  const containsReact = techStack.some((tech) => tech === 'React');

  return (
    <article
      className={`${style.card} ${containsReact ? style.grey__background : ''}`}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>Tech Stack</h3>
      <ul>
        {techStack.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className={style.link_wrapper}>
        <a href={githubLink}>Github Link</a>
        {deployedLink && <a href={deployedLink}>Deployed Link</a>}
      </div>
    </article>
  );
};

export default ProjectCard;
