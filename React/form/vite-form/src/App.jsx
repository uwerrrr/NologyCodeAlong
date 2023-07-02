import { useState } from "react";
import ControlledForm from "./Components/ControlledForm";


function App() {
  const [formSuccess, setFormSuccess] = useState(false);
  const [username, setUsername] = useState("");

  const formSubmit = (data) => {
    console.log("Form submitted");
    console.log(data);
    setFormSuccess(true);
    setUsername(data.username);
  };
  return (
    <>
      <ControlledForm handleSubmit={formSubmit} />
      {/* <HookForm formSubmit={formSubmit} /> */}
      {formSuccess && <p>Sucessfully submitted form {username}</p>}
    </>
  );
}

export default App;
