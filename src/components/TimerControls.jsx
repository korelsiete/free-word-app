import useTimeStore from "../stores/useTimeStore";
import useToggleStore from "../stores/useToggleStore";
import { Icon } from "./Button";

export default function TimerControls() {
  const openTimeEdit = useToggleStore((state) => state.openTimeEdit);
  const isRunning = useTimeStore((state) => state.isRunning);
  const start = useTimeStore((state) => state.start);
  const stop = useTimeStore((state) => state.stop);
  const restart = useTimeStore((state) => state.restart);

  return (
    <>
      {isRunning ? (
        <Icon type="pause" onClick={stop} />
      ) : (
        <Icon type="play" onClick={start} />
      )}
      <Icon type="restart" onClick={restart} />
      <Icon type="control" onClick={openTimeEdit} />
    </>
  );
}
