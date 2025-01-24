import { useEffect, useState } from "react";

type SlotMachineProps = {
  words: string[];
  duration?: number;
};

const SlotMachineEffect = ({ words, duration = 3000 }: SlotMachineProps) => {
  const [isSpinning, setIsSpinning] = useState(true);
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
    <div className="relative h-16 w-80 overflow-hidden">
      <div
        className={`absolute top-0 ${isSpinning ? "animate-slot-spin" : ""}`}
      >
        {displayedWords.map((word, index) => (
          <div
            key={index}
            className="h-16 flex justify-center items-center text-6xl text-white font-bold uppercase"
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlotMachineEffect;
