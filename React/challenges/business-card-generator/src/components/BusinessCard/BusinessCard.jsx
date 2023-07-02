import { useEffect, useState } from "react";
import style from "./BusinessCard.module.scss";

const BusinessCard = (props) => {
  const { busCards } = props;
  console.log("busCards: ", busCards);
  return (
    <>
      {busCards.map((busCard, index) => {
        return (
          <div key={index}>
            <h3>{busCard.name}</h3>
            <h5>{busCard.phone}</h5>
            <p>{busCard.email}</p>
            <p>{busCard.title}</p>
          </div>
        );
      })}
    </>
  );
};

export default BusinessCard;
