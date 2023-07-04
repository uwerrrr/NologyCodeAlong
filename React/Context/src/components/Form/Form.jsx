import style from './Form.module.scss';

const Form = ({ onSubmit, children }) => {
  return (
    <form className={style.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
