import { useState, useEffect, useRef } from "react";
import { ICard } from "../../../types/game";
import "./card.css";

const Card = ({
  title,
  keyword,
  titleColor,
  bgColor,
  borderColor,
  handleBet,
  handleBetReduce,
  bets,
  status,
  isLoading,
}: ICard) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsHovered(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`card ${
        bets[keyword] > 0 ? "card--justify-between" : "card--justify-end"
      }`}
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
      }}
      onClick={() => {
        if (!status && !isLoading) handleBet(keyword); // Change handleBet to setIsHovered(true) to see add and reduce bet button
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

      {/* You can achieve add and reduce bet button by changing handleBet to setIsHovered(true) :) */}
      {isHovered && (
        <div className="card__icons">
          <button
            onClick={() => {
              if (!status && !isLoading) handleBet(keyword);
            }}
            className="card__icon card__icon--plus"
          >
            +
          </button>
          <button
            onClick={() => {
              if (!status && !isLoading) handleBetReduce(keyword);
            }}
            className="card__icon card__icon--minus"
          >
            -
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
