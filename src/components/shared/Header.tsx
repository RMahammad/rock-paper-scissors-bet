import { useGame } from "../../hooks/useGame";

const Header = () => {
  const { gameState } = useGame();
  const { balance, bets, outcome } = gameState;

  return (
    <div className="bg-[#161616] w-full py-1">
      <div className="flex items-center justify-center gap-10">
        <div className="flex items-center gap-1">
          <p className="text-primary">BALANCE</p>
          <p className="text-secondary">{balance}</p>
        </div>

        <div className="flex items-center gap-1">
          <p className="text-primary">BET</p>
          <p className="text-secondary">
            {bets.paper + bets.rock + bets.scissors}
          </p>
        </div>

        <div className="flex items-center gap-1">
          <p className="text-primary">WIN</p>
          <p className="text-secondary">{outcome}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
