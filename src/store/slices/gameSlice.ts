import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameState, Choice, Status } from "../../types/game";
import { calculateWinnings } from "../../utils/calculateWinning";

const initialState: GameState = {
  balance: 5000,
  bets: { rock: 0, paper: 0, scissors: 0 },
  computerChoice: null,
  yourChoice: [],
  outcome: 0,
  status: null,
  winningAmount: 0,
  isLoading: false,
};

export const calculateOutcomeAsync = createAsyncThunk<
  { totalWinningAmount: number; status: Status; yourChoices: Choice[] } | null,
  void,
  { state: { game: GameState } }
>("game/calculateOutcomeAsync", async (_, { getState }) => {
  const state = getState() as { game: GameState };
  const { computerChoice, bets } = state.game;

  if (!computerChoice) return null;

  const activeBets = Object.entries(bets).filter(([, amount]) => amount > 0);

  if (activeBets.length === 0) return null;

  const yourChoices = activeBets.map(([choice]) => choice as Choice);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const { totalWinningAmount, status } = calculateWinnings(
    bets,
    computerChoice
  );

  return { totalWinningAmount, status, yourChoices };
});

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
      const activeBets = Object.entries(state.bets).filter(
        ([, amount]) => amount > 0
      );

      if (activeBets.length === 0) return;
      state.computerChoice = action.payload;

      const yourChoices = activeBets.map(([choice]) => choice as Choice);
      state.yourChoice = yourChoices;
    },

    resetGame: (state) => {
      state.bets = { rock: 0, paper: 0, scissors: 0 };
      state.computerChoice = null;
      state.status = null;
      state.yourChoice = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(calculateOutcomeAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(calculateOutcomeAsync.fulfilled, (state, action) => {
        if (action.payload) {
          const { totalWinningAmount, status, yourChoices } = action.payload;

          state.yourChoice = yourChoices;

          if (totalWinningAmount !== undefined && status !== undefined) {
            state.balance += totalWinningAmount;
            state.outcome =
              totalWinningAmount > 0 && status !== "tie"
                ? state.outcome + 1
                : state.outcome;
            state.status = totalWinningAmount > 0 ? status : "lost";
            state.winningAmount = totalWinningAmount;
          }
        }

        state.isLoading = false;
      })
      .addCase(calculateOutcomeAsync.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { placeBet, setComputerChoice, resetGame } = gameSlice.actions;

export default gameSlice.reducer;
