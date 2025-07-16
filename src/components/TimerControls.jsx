import useTimeStore from "../stores/useTimeStore";
import useToggleStore from "../stores/useToggleStore";
import { IconButton } from "./Button";

export default function TimerControls() {
  const openTimeEdit = useToggleStore((state) => state.openTimeEdit);
  const isRunning = useTimeStore((state) => state.isRunning);
  const start = useTimeStore((state) => state.start);
  const stop = useTimeStore((state) => state.stop);
  const restart = useTimeStore((state) => state.restart);

  return (
    <>
      {isRunning ? (
        <IconButton icon="pause" onClick={stop} />
      ) : (
        <IconButton icon="play" onClick={start} />
      )}
      <IconButton icon="restart" onClick={restart} />
      <IconButton icon="control" onClick={openTimeEdit} />
    </>
  );
}
