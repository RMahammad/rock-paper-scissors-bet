import { Choice, GameChoices } from "../types/game";

export const gameChoices: GameChoices[] = [
  {
    title: "Rock",
    keyword: "rock",
    bgColor: "bg-rock-bg",
    titleColor: "text-rock-text",
    borderColor: "border-rock-text",
  },
  {
    title: "Paper",
    keyword: "paper",
    bgColor: "bg-paper-bg",
    titleColor: "text-paper-text",
    borderColor: "border-paper-text",
  },
  {
    title: "Scissors",
    keyword: "scissors",
    bgColor: "bg-scissors-bg",
    titleColor: "text-scissors-text",
    borderColor: "border-scissors-text",
  },
];

export const loseConditions = {
  scissors: "rock",
  rock: "paper",
  paper: "scissors",
} as Record<Choice, Choice>;
