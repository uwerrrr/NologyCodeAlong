import React from 'react';
import { Link } from 'react-router-dom';
import style from './ProjectCard.module.scss';

const ProjectCard = ({ project }) => {
  const { id, title } = project;
  return (
    <article className={style.card}>
      <h3>{title}</h3>
      <img
        className={style.img}
        src='http://placekitten.com/250/250/'
        alt='kitten'
      />
      <Link to={`${id}`}>See More</Link>
    </article>
  );
};

export default ProjectCard;
