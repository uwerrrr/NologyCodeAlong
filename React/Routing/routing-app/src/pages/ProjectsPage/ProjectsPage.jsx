import React from 'react';
import ProjectList from '../../containers/ProjectList/ProjectList';

const ProjectsPage = ({ projects }) => {
  return (
    <main>
      <h2>Projects Page</h2>
      <ProjectList projects={projects} />
    </main>
  );
};

export default ProjectsPage;
