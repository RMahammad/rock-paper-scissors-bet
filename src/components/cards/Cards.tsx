import { gameChoices } from "../../constants";
import Card from "./card/Card";
import { ICards } from "../../types/game";
import "./cards.css";

const Cards = ({ handleBet, bets, status, isLoading }: ICards) => {
  return (
    <div className="cards-container">
      <div className="cards-grid">
        {gameChoices.map((item) => (
          <div key={item.keyword}>
            <Card
              title={item.title}
              titleColor={item.titleColor}
              bgColor={item.bgColor}
              keyword={item.keyword}
              borderColor={item.borderColor}
              handleBet={handleBet}
              bets={bets}
              status={status}
              isLoading={isLoading}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
