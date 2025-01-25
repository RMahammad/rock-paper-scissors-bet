import { IPlayButton } from "../../../types/game";
import "./customButton.css";

const CustomButton = ({ handleClick, title, isLoading }: IPlayButton) => {
  return (
    <button
      onClick={() => {
        if (!isLoading) handleClick();
      }}
      className={`play-button ${isLoading ? "loading" : ""}`}
    >
      {title}
    </button>
  );
};

export default CustomButton;
