import { useForm } from "react-hook-form";
import style from "./Form.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
// validation using yup library
// rule set is defined in schema.js file

const HookForm = ({ formSubmit }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });
  // use register to tell React Hook Form what input - replace name property in html tag
  /* "handleSubmit" will validate your inputs before invoking "onSubmit" */

  return (
    <form className={style.form} onSubmit={handleSubmit(formSubmit)}>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}

      <div className={style.field}>
        <label htmlFor="usernameInput">Username</label>

        {/* use register to tell React Hook Form what input - replace name
        property in html tag */}
        <input id="usernameInput" type="text" {...register("username")} />

        {/* access error with registered "name" - errors.registeredName*/}
        {/* errors will return when field validation fails  */}
        {errors.username && (
          <p className={style.error}>{errors.username.message}</p>
        )}
      </div>

      <div className={style.field}>
        <label htmlFor="emailInput">Email</label>
        <input id="emailInput" type="email" {...register("email")} />
        {errors.email && <p className={style.error}>{errors.email.message}</p>}
      </div>
      <div className={style.field}>
        <label htmlFor="passwordInput">Password</label>
        <input id="passwordInput" type="password" {...register("password")} />
        {errors.password && (
          <p className={style.error}>{errors.password.message}</p>
        )}
      </div>

      <div className={style.field}>
        <label htmlFor="passwordConfirmInput">Password Confirmation</label>
        <input
          id="passwordConfirmInput"
          type="password"
          {...register("passwordConfirm")}
        />
        {errors.passwordConfirm && (
          <p className={style.error}>{errors.passwordConfirm.message}</p>
        )}
      </div>

      <div className={style.field}>
        <button>Register</button>
      </div>
    </form>
  );
};

export default HookForm;
