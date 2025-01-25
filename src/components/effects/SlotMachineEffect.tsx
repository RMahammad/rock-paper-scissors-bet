import { useEffect, useState } from "react";
import "./slotMachineEffect.css";

type SlotMachineProps = {
  words: string[];
  duration?: number;
};

const SlotMachineEffect = ({ words, duration = 3000 }: SlotMachineProps) => {
  const [isSpinning, setIsSpinning] = useState<boolean>(true);
  const [displayedWords, setDisplayedWords] = useState<string[]>([]);

  useEffect(() => {
    setDisplayedWords([
      ...words,
      ...words,
      ...words,
      ...words,
      ...words,
      ...words,
      ...words,
      ...words,
    ]);

    const timeout = setTimeout(() => {
      setIsSpinning(false);
    }, duration);

    return () => clearTimeout(timeout);
  }, [words, duration]);

  return (
    <div className="slot-machine-container">
      <div
        className={`slot-machine-words ${
          isSpinning ? "animate-slot-spin" : ""
        }`}
      >
        {displayedWords.map((word, index) => (
          <div key={index} className="slot-machine-word">
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlotMachineEffect;
