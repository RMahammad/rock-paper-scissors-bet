import { loseConditions } from "../constants";
import { Choice } from "../types/game";

export const calculateWinnings = (
  bets: Record<Choice, number>,
  computerChoice: Choice
) => {
  const activeBets = Object.entries(bets).filter(([, amount]) => amount > 0);
  let totalWinningAmount = 0;
  let status: "won" | "lost" | "tie" = "lost";

  if (activeBets.length === 1) {
    const [position, amount] = activeBets[0];
    if (loseConditions[computerChoice] === position) {
      totalWinningAmount += amount * 14;
      status = "won";
    } else if (computerChoice === position) {
      totalWinningAmount += amount;
      status = "tie";
    }
  } else if (activeBets.length === 2) {
    activeBets.forEach(([position, amount]) => {
      if (loseConditions[computerChoice] === position) {
        totalWinningAmount += amount * 3;
        status = "won";
      }
    });

    if (totalWinningAmount === 0) {
      activeBets.forEach(([position, amount]) => {
        if (computerChoice === position) {
          totalWinningAmount += amount;
          status = "tie";
        }
      });
    }
  }

  return { totalWinningAmount, status };
};
