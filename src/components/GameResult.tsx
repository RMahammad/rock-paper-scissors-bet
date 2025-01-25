import { useEffect, useState } from "react";
import { loseConditions } from "../constants";
import SlotMachineEffect from "./effects/SlotMachineEffect";
import { IGameResult } from "../types/game";

const GameResult = ({
  computerChoice,
  yourChoice,
  isLoading,
  status,
  winningAmount,
}: IGameResult) => {
  const [showFinalValue, setShowFinalValue] = useState(false);
  const [showWinner, setShowWinner] = useState(false);

  console.log(status);

  useEffect(() => {
    if (!isLoading) {
      const timeoutId = setTimeout(() => {
        setShowFinalValue(true);
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [isLoading]);

  useEffect(() => {
    if (status) {
      let timeoutId;
      if (yourChoice.length > 1) {
        timeoutId = setTimeout(() => {
          setShowWinner(true);
        }, 1500);
      } else {
        timeoutId = setTimeout(() => {
          setShowWinner(true);
        }, 1000);
      }

      return () => clearTimeout(timeoutId);
    }
  }, [status]);

  return (
    <div>
      {!showWinner ? (
        <div className="flex flex-col md:flex-row md:items-end justify-center gap-5 md:gap-16 text-center">
          {isLoading ? (
            <SlotMachineEffect
              words={["Rock", "Paper", "Scissors"]}
              duration={3000}
            />
          ) : (
            <p className="text-5xl md:text-3xl lg:text-6xl text-white font-bold uppercase">
              {computerChoice}
            </p>
          )}

          <p className="text-xl md:text-xl lg:text-3xl text-primary font-bold">
            VS
          </p>

          {yourChoice.length > 1 ? (
            <div className="relative">
              {!showFinalValue && (
                <p
                  className={`text-5xl md:text-3xl lg:text-6xl text-white font-bold uppercase transition-opacity duration-500 ease-in-out ${
                    isLoading ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {yourChoice.join(" and ")}
                </p>
              )}

              {showFinalValue && (
                <p
                  className={`text-5xl md:text-3xl lg:text-6xl text-white font-bold uppercase transition-opacity duration-1000 ease-in-out ${
                    showFinalValue ? "opacity-100" : "opacity-0"
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
            <p
              className={`text-5xl md:text-3xl lg:text-6xl text-white font-bold uppercase`}
            >
              {yourChoice.join(" and ")}
            </p>
          )}
        </div>
      ) : (
        <div>
          {status === "won" ? (
            <div className="flex flex-col items-center justify-center text-center gap-5">
              <p className="text-5xl md:text-6xl font-bold uppercase text-green-500">
                {loseConditions[computerChoice]} {status.toUpperCase()}
              </p>

              <p className="text-xl lg:text-2xl font-semibold uppercase text-primary">
                YOU WIN <span className="text-white">{winningAmount}.00</span>
              </p>
            </div>
          ) : status === "tie" ? (
            <div className="flex flex-col items-center justify-center text-center gap-5">
              <p className="text-5xl md:text-6xl font-bold uppercase text-orange-400">
                {computerChoice} {status.toUpperCase()}
              </p>

              <p className="text-xl lg:text-2xl font-semibold uppercase text-primary">
                YOU WIN <span className="text-white">{winningAmount}.00</span>
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center gap-5">
              <p className="text-5xl md:text-6xl font-bold uppercase text-red-500">
                YOU LOST
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GameResult;
