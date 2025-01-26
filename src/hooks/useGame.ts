import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import {
  placeBet,
  setComputerChoice,
  resetGame,
  calculateOutcomeAsync,
  reduceBet,
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

  const handleBetReduce = (position: Choice) => {
    if (gameState.bets[position] >= 500) {
      dispatch(reduceBet({ position, amount: 500 }));
    }
  };

  const handlePlay = () => {
    const choices: Choice[] = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    dispatch(setComputerChoice(randomChoice));
    dispatch(calculateOutcomeAsync());
  };

  const handleReset = () => {
    dispatch(resetGame());
  };

  return {
    gameState,
    handleBet,
    handleBetReduce,
    handlePlay,
    handleReset,
  };
};
