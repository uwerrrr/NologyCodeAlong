import { useState, useEffect } from 'react';
import ProjectPage from '../../pages/ProjectPage/ProjectPage';
import { useParams } from 'react-router-dom';
import { getProjectById } from '../../services/project-services';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const ProjectPageLoader = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getProjectById(parseInt(id))
      .then((project) => setProject(project))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [id]);
  return (
    <>
      {loading && <LoadingSpinner size='2xl' />}
      {!loading && project && <ProjectPage project={project} />}
      {!loading && error && <p>{error.message}</p>}
    </>
  );
};

export default ProjectPageLoader;
