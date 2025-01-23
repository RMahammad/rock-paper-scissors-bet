import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import {
  placeBet,
  setComputerChoice,
  calculateOutcome,
  resetGame,
} from "../store/slices/gameSlice";
import { Choice } from "../types/game";

export const useGame = () => {
  const dispatch = useDispatch<AppDispatch>();
  const gameState = useSelector((state: RootState) => state.game);

  const handleBet = (position: Choice) => {
    if (gameState.balance >= 500) {
      dispatch(placeBet({ position, amount: 500 }));
    }
  };

  const handlePlay = () => {
    const choices: Choice[] = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    dispatch(setComputerChoice(randomChoice));
    dispatch(calculateOutcome());
  };

  const handleReset = () => {
    dispatch(resetGame());
  };

  return {
    gameState,
    handleBet,
    handlePlay,
    handleReset,
  };
};
