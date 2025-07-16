import useTimeStore from "../stores/useTimeStore";
import useWordStore from "../stores/useWordStore";
import useToggleStore from "../stores/useToggleStore";
import { useEffect } from "react";

export default function ProgressBar() {
  const changeCurrent = useWordStore((state) => state.changeCurrent);
  const isOpenTimer = useToggleStore((state) => state.isOpenTimer);
  const timeLeft = useTimeStore((state) => state.timeLeft);
  const progress = useTimeStore((state) => (timeLeft / state.duration) * 100);
  const finish = useTimeStore((state) => state.finish);

  useEffect(() => {
    if (finish) changeCurrent();
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
