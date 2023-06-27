import style from './Card.module.scss';

const Card = ({ cohortName, startDate = 'TBA' }) => {
  return (
    <div className={style.card}>
      <h3>{cohortName}</h3>
      <p>Start: {startDate}</p>
    </div>
  );
};

export default Card;
