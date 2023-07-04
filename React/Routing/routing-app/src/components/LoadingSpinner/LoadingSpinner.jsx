import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import style from './LoadingSpinner.module.scss';

const LoadingSpinner = () => {
  return (
    <div className={style.container}>
      <FontAwesomeIcon icon={faSpinner} spin className={style.icon} />
    </div>
  );
};

export default LoadingSpinner;
