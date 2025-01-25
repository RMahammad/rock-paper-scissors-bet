export interface GameChoices {
  title: string;
  keyword: Choice;
  titleColor: string;
  bgColor: string;
  borderColor: string;
}

export interface ICard extends GameChoices {
  bets: Bet;
  handleBet: (keyword: Choice) => void;
  status: Status;
  isLoading: boolean;
}

interface ICards {
  handleBet: (keyword: Choice) => void;
  bets: Bet;
  status: Status;
  isLoading: boolean;
}

interface IPlayButton {
  handleClick: () => void;
  title: string;
  isLoading: boolean;
}

interface IGameResult {
  computerChoice: Choice;
  yourChoice: Choice[];
  isLoading: boolean;
  status: Status;
  winningAmount: number;
}

export type Choice = "rock" | "paper" | "scissors";

export interface Bet {
  rock: number;
  paper: number;
  scissors: number;
}

export interface GameState {
  balance: number;
  bets: Bet;
  computerChoice: Choice | null;
  yourChoice: Choice[];
  outcome: number;
  status: Status;
  winningAmount: number;
  isLoading: boolean;
}

export type Status = "won" | "lost" | "tie" | null;
