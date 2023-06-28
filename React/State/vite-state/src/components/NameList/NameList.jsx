import React from "react";
import namesData from "../../data/names.json";
export const NameList = ({ filterValue }) => {
  console.log(namesData);
  return (
    <ul>
      {namesData
        .filter(
          (name) => name.toLowerCase().includes(filterValue.toLowerCase())
          // filterValue is state value passed from App module
        )
        .map((name, index) => {
          return <li key={index}>{name}</li>;
          // using map must have key
        })}
    </ul>
  );
};
