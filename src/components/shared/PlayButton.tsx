import { IPlayButton } from "../../types/game";

const PlayButton = ({ handlePlay, title }: IPlayButton) => {
  return (
    <button
      onClick={() => {
        handlePlay();
      }}
      className="rounded-full bg-black border-2 border-primary text-primary py-5 px-14 text-3xl uppercase font-medium cursor-pointer"
    >
      {title}
    </button>
  );
};

export default PlayButton;
