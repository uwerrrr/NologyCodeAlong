import { useEffect, useState } from "react";
import style from "./Form.module.scss";

const Form = ({ handleSubmit, formValues, setFormValues }) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [isPhone, setIsPhone] = useState(false);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  const validateForm = (formValues) => {
    setIsEmpty(Object.keys(formValues).some((key) => formValues[key] === ""));

    setIsPhone(!isNaN(formValues.phone));

    if (isEmpty === true || isPhone === false) return false;
    else return true;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const isFormValid = validateForm(formValues);

    setIsSubmitClicked(true);

    if (isFormValid) {
      console.log("form submitted");
      handleSubmit(formValues);
    }
  };

  // as user type -> update formValues -> display back to field
  const onInputChange = (event) => {
    const { name, value } = event.target;
    // name and value atributes of html tag

    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <div className={style.field}>
        <label htmlFor="nameInput">Name</label>
        <input
          id="nameInput"
          type="text"
          name="name"
          value={formValues.name}
          onChange={onInputChange}
        />
        <label htmlFor="phoneInput">Phone</label>
        <input
          id="phoneInput"
          type="tel"
          name="phone"
          value={formValues.phone}
          onChange={onInputChange}
        />
        <label htmlFor="emailInput">Email</label>
        <input
          id="emailInput"
          type="email"
          name="email"
          value={formValues.email}
          onChange={onInputChange}
        />
        <label htmlFor="titleInput">Title</label>
        <input
          id="titleInput"
          type="text"
          name="title"
          value={formValues.title}
          onChange={onInputChange}
        />
      </div>

      <div className={style.field}>
        {isSubmitClicked && isEmpty && <p>Can not leave fields empty</p>}
        {isSubmitClicked && !isEmpty && !isPhone && (
          <p>Phone must be numbers</p>
        )}
      </div>

      <div className={style.field}>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Form;
