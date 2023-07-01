import React, { useRef } from "react";
import { useState } from "react";
import style from "./Form.module.scss";

const RefForm = ({ handleSubmit }) => {
  // state
  const [errorStr, setErrorStr] = useState("");

  // validation
  const validateForm = (data) => {
    if (data.username === "") return false;
    if (data.email === "") return false;
    if (data.password === "") return false;
    if (data.passwordConfirm === "") return false;
    return true;
  };

  // define formRef
  const formRef = useRef(null);


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
    // method to get actual input data from formData using name attribute

    const isValid = validateForm(submittedData);
    if (isValid) {
      handleSubmit(submittedData);
      form.reset();
    } else {
      // should do real error handling here
      setErrorStr("Fix form error"); // just demonstration
    }
  };

  return (
    <>
      <form className={style.form} onSubmit={onSubmit} ref={formRef}>
        {/* set ref to form DOM with ref={formRef}*/}

        <div className={style.field}>
          <label htmlFor="usernameInput">Username</label>
          <input id="usernameInput" type="text" name="username" />
        </div>
        <div className={style.field}>
          <label htmlFor="emailInput">Email</label>
          <input id="emailInput" type="email" name="email" />
        </div>
        <div className={style.field}>
          <label htmlFor="passwordInput">Password</label>
          <input id="passwordInput" type="password" name="password" />
        </div>

        <div className={style.field}>
          <label htmlFor="passwordConfirmInput">Password Confirmation</label>
          <input
            id="passwordConfirmInput"
            type="password"
            name="passwordConfirm"
          />
        </div>

        <div className={style.field}>
          <button>Register</button>
        </div>
      </form>
      {errorStr && <p>{errorStr}</p>}
    </>
  );
};

export default RefForm;
