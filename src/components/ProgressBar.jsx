import { useEffect } from "react";
import { useTimer } from "../context/TimerContext";
import { useWord } from "../context/WordContext";
import { useToogle } from "../context/ToogleContext";

export default function ProgressBar() {
  const { getWord } = useWord();
  const { isOpenTimer } = useToogle();
  const { timeLeft, duration } = useTimer();
  const progress = (timeLeft / duration) * 100;

  useEffect(() => {
    if (timeLeft < 1) {
      getWord();
    }
  }, [timeLeft]);

  return (
    isOpenTimer && (
      <div className="fixed bottom-0 left-0 w-full h-10 bg-gray-200">
        <div
          className={`h-full transition-all duration-1000 ${
            timeLeft < 3 ? "bg-red-400" : "bg-blue-400"
          }`}
          style={{ width: `${progress}%` }}
        >
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-2xl font-extrabold">
            {timeLeft}
          </span>
        </div>
      </div>
    )
  );
}
