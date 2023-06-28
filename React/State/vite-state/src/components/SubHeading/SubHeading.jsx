import styles from './SubHeading.module.scss';

export const SubHeading = ({ content }) => {
  return <h2 className={styles.heading}>{content}</h2>;
};
 