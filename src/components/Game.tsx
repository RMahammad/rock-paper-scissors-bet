import Cards from "./cards/Cards";
import { useGame } from "../hooks/useGame";
import GameResult from "./result/GameResult";
import CustomButton from "./shared/custom-button/CustomButton";
import "./game.css";

const Game = () => {
  const { gameState, handleBet, handleBetReduce, handlePlay, handleReset } =
    useGame();
  const { bets, status, computerChoice, yourChoice, isLoading, winningAmount } =
    gameState;

  return (
    <div className="game-container">
      <div className="result-container">
        {computerChoice && (
          <GameResult
            computerChoice={computerChoice}
            yourChoice={yourChoice}
            isLoading={isLoading}
            status={status}
            winningAmount={winningAmount}
          />
        )}
      </div>

      <div className="pick-section">
        {Object.values(bets).every((e) => e === 0) && (
          <p className="pick-title">PICK YOUR POSITIONS</p>
        )}

        <div className="cards-container">
          <Cards
            status={status}
            handleBet={handleBet}
            handleBetReduce={handleBetReduce}
            bets={bets}
            isLoading={isLoading}
          />
        </div>
      </div>

      <div className="button-container">
        {computerChoice && status ? (
          <CustomButton
            isLoading={isLoading}
            handleClick={handleReset}
            title="Clear"
          />
        ) : (
          <CustomButton
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
