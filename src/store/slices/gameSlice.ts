import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameState, Choice } from "../../types/game";
import { calculateWinnings } from "../../utils/calculateWinning";

const initialState: GameState = {
  balance: 5000,
  bets: { rock: 0, paper: 0, scissors: 0 },
  computerChoice: null,
  outcome: 0,
  status: null,
  winningAmount: 0,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    placeBet: (
      state,
      action: PayloadAction<{ position: Choice; amount: number }>
    ) => {
      const { position, amount } = action.payload;

      const activeBets = Object.keys(state.bets).filter(
        (key) => state.bets[key as Choice] > 0
      );
      if (activeBets.length >= 2 && !activeBets.includes(position)) return;

      if (state.balance >= amount) {
        state.bets[position] += amount;
        state.balance -= amount;
      }
    },
    setComputerChoice(state, action: PayloadAction<Choice>) {
      state.computerChoice = action.payload;
    },
    calculateOutcome: (state) => {
      if (!state.computerChoice) return;

      const activeBets = Object.entries(state.bets).filter(
        ([, amount]) => amount > 0
      );

      if (activeBets.length === 0) return;

      const { totalWinningAmount, status } = calculateWinnings(
        state.bets,
        state.computerChoice
      );

      state.balance += totalWinningAmount;

      // state.bets = { rock: 0, paper: 0, scissors: 0 };
      // state.computerChoice = null;
      state.outcome =
        totalWinningAmount > 0 && status !== "tie"
          ? state.outcome + 1
          : state.outcome;
      state.status = totalWinningAmount > 0 ? status : "lost";
      state.winningAmount = totalWinningAmount;
    },
    resetGame: (state) => {
      state.bets = { rock: 0, paper: 0, scissors: 0 };
      state.computerChoice = null;
      state.status = null;
    },
  },
});

export const { placeBet, setComputerChoice, calculateOutcome, resetGame } =
  gameSlice.actions;

export default gameSlice.reducer;
