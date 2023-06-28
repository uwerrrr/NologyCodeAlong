import styles from './CardList.module.scss';

const CardList = ({ children }) => {
  return <section className={styles.list}>{children}</section>;
};

export default CardList;
