import React from 'react';
import styles from './Card.module.scss';

const Card = ({ heading, content, hasButton }) => {
  console.log(hasButton);
  return (
    <article className={styles.card}>
      <h3 className={styles.heading}>{heading}</h3>
      <p>{content}</p>
      {/* conditional rendering using props */}
      {/* {hasButton && <button>Click me</button>} */}
      {/* ternerary operator for if/else type rendering */}
      {hasButton ? <button>Click me</button> : <span>No Button</span>}
    </article>
  );
};

export default Card;
