import "./App.css";
import Main from "./components/Main/Main";
import planets from "./data.json";

function App() {
  return (
    <>
      <Main planets={planets} />
    </>
  );
}

export default App;
