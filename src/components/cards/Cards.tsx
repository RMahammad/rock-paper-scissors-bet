import { gameChoices } from "../../constants";
import Card from "./Card";
import { ICards } from "../../types/game";

const Cards = ({ handleBet, bets, status, isLoading }: ICards) => {
  return (
    <div className="flex items-center justify-center gap-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
