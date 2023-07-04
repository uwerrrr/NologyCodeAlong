import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { getAllProjects } from "./services/project-services";
import ProjectPageLoader from "./containers/ProjectPageLoader/ProjectPageLoader";

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
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/projects"
            element={<ProjectsPage projects={projects} />}
            // pass projects data as props to ProjectsPage
          />

          <Route path="projects/:id" element={<ProjectPageLoader />} />
          {/* :id - is a dynamic segment indicated by the preceding colon (:). It acts as a placeholder for a value that can vary. It captures the value provided in that part of the URL and makes it available as a route parameter, which can be accessed within the associated component. */}

          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
