import TimerControls from "./TimerControls";
import useToggleStore from "../stores/useToggleStore";

export default function LeftSection() {
  const isOpenTimer = useToggleStore((state) => state.isOpenTimer);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col gap-2 absolute left-3 top-3"
    >
      {isOpenTimer && <TimerControls />}
    </div>
  );
}
