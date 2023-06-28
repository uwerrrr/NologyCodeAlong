import { useState } from "react";
import "./App.css";
import { NameList } from "./components/NameList/NameList";
import SearchBar from "./components/SearchBar/SearchBar";
import StyledCounter from "./components/StyledCounter/StyledCounter";
import Card from "./components/Card/Card";

function App() {
  const [filterValue, setFilterValue] = useState("");

  const handleSubmit = (value) => {
    console.log("The value was: " + value);
    setFilterValue(value);
  };
  return (
    <>
      {/* <StyledCounter /> */}
      <SearchBar handleSubmit={handleSubmit} />{" "}
      {/* pass  setter function to SearchBar*/}
      <NameList filterValue={filterValue} />
      {/* pass  state value to NameList*/}
      
      {/* <Card title="Title" content="Content" /> */}
    </>
  );
}

export default App;
