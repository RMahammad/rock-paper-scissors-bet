import { useEffect, useState } from "react";
import { loseConditions } from "../../constants";
import SlotMachineEffect from "../effects/SlotMachineEffect";
import { IGameResult } from "../../types/game";
import "./gameResult.css";

const GameResult = ({
  computerChoice,
  yourChoice,
  isLoading,
  status,
  winningAmount,
}: IGameResult) => {
  const [showFinalValue, setShowFinalValue] = useState(false);
  const [showWinner, setShowWinner] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const timeoutId = setTimeout(() => {
        setShowFinalValue(true);
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [isLoading]);

  useEffect(() => {
    if (showFinalValue) {
      const timeoutId = setTimeout(() => {
        setShowWinner(true);
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [showFinalValue]);

  return (
    <div className="game-result-container">
      {!showWinner ? (
        <div className="game-result-content">
          {isLoading ? (
            <SlotMachineEffect
              words={["Rock", "Paper", "Scissors"]}
              duration={3000}
            />
          ) : (
            <p className="computer-choice">{computerChoice}</p>
          )}

          <p className="vs-text">VS</p>

          {yourChoice.length > 1 ? (
            <div className="relative">
              {!showFinalValue && (
                <p
                  className={`your-choice ${
                    isLoading ? "fade-in" : "fade-out"
                  }`}
                >
                  {yourChoice.join(" and ")}
                </p>
              )}

              {showFinalValue && (
                <p
                  className={`your-choice  ${
                    showFinalValue ? "fade-in" : "fade-out"
                  }`}
                >
                  {status === "won"
                    ? loseConditions[computerChoice]
                    : status === "tie"
                    ? computerChoice
                    : yourChoice.join(" and ")}
                </p>
              )}
            </div>
          ) : (
            <p className="your-choice">{yourChoice.join(" and ")}</p>
          )}
        </div>
      ) : (
        <div>
          {status === "won" ? (
            <div className="winner-container">
              <p className="winner-status winner-status-won">
                {loseConditions[computerChoice]} {status.toUpperCase()}
              </p>
              <p className="winner-amount">
                YOU WIN <span>{winningAmount}.00</span>
              </p>
            </div>
          ) : status === "tie" ? (
            <div className="winner-container">
              <p className="winner-status winner-status-tie">
                {computerChoice} {status.toUpperCase()}
              </p>
              <p className="winner-amount">
                YOU WIN <span>{winningAmount}.00</span>
              </p>
            </div>
          ) : (
            <div className="winner-container">
              <p className="winner-status winner-status-lost">YOU LOST</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GameResult;
