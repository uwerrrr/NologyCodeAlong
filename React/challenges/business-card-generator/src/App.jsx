import { useState } from "react";

import "./App.css";
import BusinessCard from "./components/BusinessCard/BusinessCard";
import Form from "./components/Form/Form";

function App() {
  const defaultValues = {
    name: "",
    phone: "",
    email: "",
    title: "",
  };

  const [formValues, setFormValues] = useState(defaultValues);
  const [busCards, setBusCards] = useState([]);

  const handleSubmit = (submittedValues) => {
    setFormValues(submittedValues);
    setBusCards([...busCards, formValues]);

    setFormValues(defaultValues);
  };

  return (
    <>
      <Form
        handleSubmit={handleSubmit}
        setFormValues={setFormValues}
        formValues={formValues}
      />
      {busCards.length >= 1 && <BusinessCard busCards={busCards} />}
    </>
  );
}

export default App;
