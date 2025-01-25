import { Choice, GameChoices } from "../types/game";

export const gameChoices: GameChoices[] = [
  {
    title: "Rock",
    keyword: "rock",
    bgColor: "#211f4f",
    titleColor: "#2680ea",
    borderColor: "#2680ea",
  },
  {
    title: "Paper",
    keyword: "paper",
    bgColor: "#1a381d",
    titleColor: "#17bf57",
    borderColor: "#17bf57",
  },
  {
    title: "Scissors",
    keyword: "scissors",
    bgColor: "#50091e",
    titleColor: "#e21642",
    borderColor: "#e21642",
  },
];

export const loseConditions = {
  scissors: "rock",
  rock: "paper",
  paper: "scissors",
} as Record<Choice, Choice>;
