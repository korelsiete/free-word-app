import { useTimer } from "../context/TimerContext";
import { useToogle } from "../context/ToogleContext";
import { PauseIcon, RestartIcon, PlayIcon, SettingTimeIcon } from "./Icon";

export default function TimerControls() {
  const { openTimeEdit } = useToogle();
  const { isRunning, setIsRunning, setTimeLeft, duration } = useTimer();
  return (
    <>
      {isRunning ? (
        <PauseIcon onClick={() => setIsRunning(false)} />
      ) : (
        <PlayIcon onClick={() => setIsRunning(true)} />
      )}
      <RestartIcon onClick={() => setTimeLeft(duration)} />
      <SettingTimeIcon onClick={openTimeEdit} />
    </>
  );
}
