import { IPlayButton } from "../../types/game";

const PlayButton = ({ handleClick, title, isLoading }: IPlayButton) => {
  return (
    <button
      onClick={() => {
        if (!isLoading) handleClick();
      }}
      className={`${isLoading ? "opacity-40" : "cursor-pointer"} rounded-full bg-black border-2 border-primary text-primary py-5 px-14 text-3xl uppercase font-medium `}
    >
      {title}
    </button>
  );
};

export default PlayButton;
