import React from "react";
import { ICard } from "../../../types/game";
import "./Card.css";

const Card = ({
  title,
  keyword,
  titleColor,
  bgColor,
  borderColor,
  handleBet,
  bets,
  status,
  isLoading,
}: ICard) => {
  console.log("This is status: ", status);

  return (
    <div
      className={`card ${
        bets[keyword] > 0 ? "card--justify-between" : "card--justify-end"
      }`}
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
      }}
      onClick={() => {
        if (!status && !isLoading) handleBet(keyword);
      }}
    >
      {bets[keyword] > 0 && (
        <div className="card__counter">{bets[keyword]}</div>
      )}

      <p
        style={{
          color: titleColor,
        }}
        className={`card__title ${keyword && titleColor}`}
      >
        {title}
      </p>
    </div>
  );
};

export default Card;
