import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './pages/LandingPage/LandingPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ContactPage from './pages/ContactPage/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { getAllProjects } from './services/project-services';
import ProjectPageLoader from './containers/ProjectPageLoader/ProjectPageLoader';
import ThankYou from './pages/ThankYou/ThankYou';
function App() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getAllProjects().then((data) => setProjects(data));
  }, []);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route
            path='/projects'
            element={<ProjectsPage projects={projects} />}
          />
          <Route path='projects/:id' element={<ProjectPageLoader />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/thanks' element={<ThankYou />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
