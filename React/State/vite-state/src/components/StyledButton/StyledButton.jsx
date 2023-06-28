import styles from './StyledButton.module.scss';

const StyledButton = ({ buttonType = 'primary', children, onBtnClick }) => {
  const btnStyles = [];
  if (buttonType === 'primary') {
    btnStyles.push(styles.primary);
  } else if (buttonType === 'danger') {
    btnStyles.push(styles.danger);
  }

  return (
    <button onClick={onBtnClick} className={btnStyles.join(' ')}>
      {children}
    </button>
  );
};

export default StyledButton;
