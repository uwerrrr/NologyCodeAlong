import styles from './FlexWrap.module.scss';

const FlexWrap = ({ children }) => {
  return <section className={styles.wrap}>{children}</section>;
};

export default FlexWrap;
