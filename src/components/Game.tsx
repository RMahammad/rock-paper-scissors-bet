import Cards from "./cards/Cards";
import PlayButton from "./shared/PlayButton";
import { useGame } from "../hooks/useGame";
import { loseConditions } from "../constants";
import { useEffect, useState } from "react";

const Game = () => {
  const [showWinner, setShowWinner] = useState(false);
  const { gameState, handleBet, handlePlay, handleReset } = useGame();
  const { bets } = gameState;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowWinner(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [gameState.status]);

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      {!showWinner && gameState.computerChoice && gameState.status && (
        <div className="flex items-end justify-center gap-5">
          <p className="text-6xl text-white font-bold uppercase">
            {gameState.computerChoice}
          </p>
          <p className="text-3xl text-primary font-bold">VS</p>
          <p className="text-6xl text-white font-bold uppercase">
            {gameState.status === "won"
              ? loseConditions[gameState.computerChoice]
              : "Lost"}
          </p>
        </div>
      )}

      <div className="flex flex-col gap-10 justify-center items-center">
        <p className="text-primary">PICK YOUR POSITIONS</p>

        <div className="">
          <Cards handleBet={handleBet} bets={bets} />
        </div>
      </div>

      <div>
        {gameState.computerChoice && gameState.status ? (
          <PlayButton handlePlay={handleReset} title="Clear" />
        ) : (
          <PlayButton handlePlay={handlePlay} title="Play" />
        )}
      </div>
    </div>
  );
};

export default Game;
