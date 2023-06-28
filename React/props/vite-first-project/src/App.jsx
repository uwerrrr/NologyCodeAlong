import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main/Main';

const App = () => {
  return (
    <>
      <Header heading='Hello' subheading='goodbye' fruit='orange' />
      <Main />
      <Footer />
    </>
  );
};

export default App;
