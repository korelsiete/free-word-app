import { useToogle } from "../context/ToogleContext";
import TimerControls from "./TimerControls";

export default function LeftSection() {
  const { isOpenTimer } = useToogle();

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col gap-2 absolute left-3 top-3"
    >
      {isOpenTimer && <TimerControls />}
    </div>
  );
}
