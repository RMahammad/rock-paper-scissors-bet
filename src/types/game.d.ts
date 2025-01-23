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
}

interface ICards {
  handleBet: (keyword: Choice) => void;
  bets: Bet;
}

interface IPlayButton {
  handlePlay: () => void;
  title: string;
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
  outcome: number;
  status: Status;
  winningAmount: number;
}

export type Status = "won" | "lost" | "tie" | null;
