import { useState } from "react";

const SearchBar = ({ handleSubmit }) => {
  const [searchValue, setSearchValue] = useState("");

  const formSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");

    handleSubmit(searchValue);
    // pass searchValue (input value) as param to handleSubmit function -> update state value of filterValue

    setSearchValue("");
    // set searchValue (state input value) = ''
    
  };

  const onInputChange = (event) => {
    setSearchValue(event.target.value);
    // set searchValue = event.target.value
  };
  return (
    <form onSubmit={formSubmit}>
      {/* on submit -> execute formSubmit function ->  */}

      <input type="text" value={searchValue} onChange={onInputChange} />
      {/* on change -> execute onInputChange function -> set searchValue = event.target.value*/}

      <button>Search</button>
    </form>
  );
};

export default SearchBar;
