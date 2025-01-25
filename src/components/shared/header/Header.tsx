import { useGame } from "../../../hooks/useGame";
import "./Header.css"; // Import the CSS file

const Header = () => {
  const { gameState } = useGame();
  const { balance, bets, outcome } = gameState;

  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-section">
          <p className="header-text-primary">BALANCE: </p>
          <p className="header-text-secondary">{balance}</p>
        </div>

        <div className="header-section">
          <p className="header-text-primary">BET: </p>
          <p className="header-text-secondary">
            {bets.paper + bets.rock + bets.scissors}
          </p>
        </div>

        <div className="header-section">
          <p className="header-text-primary">WIN:</p>
          <p className="header-text-secondary">{outcome}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
