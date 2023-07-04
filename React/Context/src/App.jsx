import ContactPage from './pages/ContactPage/ContactPage';

import AboutMe from './pages/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import DarkModeContextProvider from './context/DarkModeContextProvider';
import Wrapper from './components/Wrapper/Wrapper';

function App() {
  return (
    <DarkModeContextProvider>
       {/* Context component  */}
       
      <Wrapper>
        <ContactPage />
        <AboutMe />
        <Footer />
      </Wrapper>
    </DarkModeContextProvider>
  );
}

export default App;
