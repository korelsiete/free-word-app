import { useTimer } from "../context/TimerContext";
import { useToogle } from "../context/ToogleContext";
import { IconButton } from "./Button";

export default function TimerControls() {
  const { openTimeEdit } = useToogle();
  const { isRunning, setIsRunning, setTimeLeft, duration } = useTimer();
  return (
    <>
      {isRunning ? (
        <IconButton icon="pause" onClick={() => setIsRunning(false)} />
      ) : (
        <IconButton icon="play" onClick={() => setIsRunning(true)} />
      )}
      <IconButton icon="restart" onClick={() => setTimeLeft(duration)} />
      <IconButton icon="control" onClick={openTimeEdit} />
    </>
  );
}
