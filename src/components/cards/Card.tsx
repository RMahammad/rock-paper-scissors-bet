import { ICard } from "../../types/game";

const Card = ({
  title,
  keyword,
  titleColor,
  bgColor,
  borderColor,
  handleBet,
  bets,
  status,
}: ICard) => {
  return (
    <div
      className={`${bgColor} border ${borderColor} w-52 h-40 rounded-lg border-2 flex flex-col items-center ${
        bets[keyword] > 0 ? "justify-between" : "justify-end"
      } py-5 cursor-pointer`}
      onClick={() => {
        if (!status) handleBet(keyword);
      }}
    >
      {bets[keyword] > 0 && (
        <div className="rounded-full w-14 h-14 flex items-center justify-center bg-white border-4 border-rock-text">
          {bets[keyword]}
        </div>
      )}

      <p className={`${keyword && titleColor} uppercase text-2xl font-bold`}>
        {title}
      </p>
    </div>
  );
};

export default Card;
