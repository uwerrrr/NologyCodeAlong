import React, { useRef } from "react";
import { useState } from "react";

const RefForm = ({ handleSubmit }) => {
  const [errorStr, setErrorStr] = useState("");

  const formRef = useRef(null);

  const validateForm = (data) => {
    if (data.username === "") return false;
    if (data.email === "") return false;
    if (data.password === "") return false;
    if (data.passwordConfirm === "") return false;
    return true;
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const form = formRef.current;
    // set form = current form ref to dom form that submitted

    const formData = new FormData(form);
    // generate form data from dom form

    const submittedData = {};
    for (let key of formData.keys()) {
      submittedData[key] = data.get(key);
    }
    // method to get actual input data from formData

    const isValid = validateForm(submittedData);
    if (isValid) {
      handleSubmit(submittedData);
      form.reset();
    } else {
      // should do real error handling here
      setErrorStr("Fix form error"); // just demonstration
    }
  };

  <form onSubmit={onSubmit} ref={formRef}>
    {" "}
  </form>;

  return <div>RefForm</div>;
};

export default RefForm;
