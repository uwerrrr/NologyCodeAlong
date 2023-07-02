import { useEffect, useState } from "react";
import style from "./Form.module.scss";

const ControlledForm = ({ handleSubmit }) => {
  // If we use state for every field we have lots of repeated code

  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [passwordConfirm, setPasswordConfim] = useState('');

  // const onUsernameChange = (e) => {
  //   setUsername(e.target.value);
  // };

  // const onEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  const defaultValues = {
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const [formValues, setFormValues] = useState(defaultValues);
  const [isFormValid, setIsFormValid] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(formValues);
    setFormValues(defaultValues);
  };

  // function to update formValues state with the value of the input that user just changed / typed
  const onInputChange = (event) => {
    const { name, value } = event.target;
    // access value of the input that user just changed

    setFormValues({ ...formValues, [name]: value });
  };

  // validation
  const validateForm = (data) => {
    if (data.username === "") return false;
    if (data.email === "") return false;
    if (data.password === "") return false;
    if (data.passwordConfirm !== data.password) return false;
    return true;
  };

  useEffect(() => {
    const isValid = validateForm(formValues);
    setIsFormValid(isValid);
  }, [formValues]);

  console.log("Form rerenders");

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <div className={style.field}>
        <label htmlFor="usernameInput">Username</label>
        <input
          id="usernameInput"
          type="text"
          name="username"
          value={formValues.username}
          onChange={onInputChange}
          required
        />
        {/* set value = formValues.username state */}
        {/* (onChange = { onInputChange }) -> when user type -> update formValues.username state value */}
        {/* re-render every char type */}
      </div>
      <div className={style.field}>
        <label htmlFor="emailInput">Email</label>
        <input
          id="emailInput"
          type="email"
          name="email"
          value={formValues.email}
          onChange={onInputChange}
        />
      </div>
      <div className={style.field}>
        <label htmlFor="passwordInput">Password</label>
        <input
          id="passwordInput"
          type="password"
          name="password"
          value={formValues.password}
          onChange={onInputChange}
        />
      </div>
      {formValues.password.length > 0 && (
        <div className={style.field}>
          <label htmlFor="passwordConfirmInput">Password Confirmation</label>
          <input
            id="passwordConfirmInput"
            type="password"
            name="passwordConfirm"
            value={formValues.passwordConfirm}
            onChange={onInputChange}
          />
        </div>
      )}

      <div className={style.field}>
        <button >Register</button>
      </div>
      {/* button disabled=true when isFormValid false */}
    </form>
  );
};

export default ControlledForm;
