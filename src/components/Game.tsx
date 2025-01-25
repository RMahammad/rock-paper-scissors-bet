import Cards from "./cards/Cards";
import PlayButton from "./shared/PlayButton";
import { useGame } from "../hooks/useGame";
import GameResult from "./GameResult";

const Game = () => {
  const { gameState, handleBet, handlePlay, handleReset } = useGame();
  const { bets, status, computerChoice, yourChoice, isLoading, winningAmount } =
    gameState;

  return (
    <div className={`flex flex-col items-center justify-center gap-10`}>
      {computerChoice && (
        <GameResult
          computerChoice={computerChoice}
          yourChoice={yourChoice}
          isLoading={isLoading}
          status={status}
          winningAmount={winningAmount}
        />
      )}

      <div className="flex flex-col gap-10 justify-center items-center mt-20">
        <p className="text-primary">PICK YOUR POSITIONS</p>

        <div className="">
          <Cards
            status={status}
            handleBet={handleBet}
            bets={bets}
            isLoading={isLoading}
          />
        </div>
      </div>

      <div>
        {computerChoice && status ? (
          <PlayButton
            isLoading={isLoading}
            handleClick={handleReset}
            title="Clear"
          />
        ) : (
          <PlayButton
            isLoading={isLoading}
            handleClick={handlePlay}
            title="Play"
          />
        )}
      </div>
    </div>
  );
};

export default Game;
