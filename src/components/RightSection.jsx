import { useEffect } from "react";
import { useTimer } from "../context/TimerContext";
import { useToogle } from "../context/ToogleContext";
import { useWord } from "../context/WordContext";
import { Link } from "react-router";
import { IconButton } from "./Button";

export default function RightSection() {
  const { word, storageLength } = useWord();
  const { openAdd, openEdit } = useToogle();

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col gap-2 absolute right-3 top-3"
    >
      <IconButton icon="add" onClick={openAdd} />
      {word && <IconButton icon="edit" onClick={openEdit} />}
      {word && (
        <Link to="/groups">
          <IconButton icon="group" />
        </Link>
      )}
      {storageLength > 1 && <TimerIconRender />}
    </div>
  );
}

function TimerIconRender() {
  const { storageLength } = useWord();
  const { openTimer, closeTimer, isOpenTimer } = useToogle();
  const { stopTimer } = useTimer();

  const onCloseTimer = () => {
    closeTimer();
    stopTimer();
  };

  const onOpenTimer = () => {
    openTimer();
  };

  useEffect(() => {
    if (storageLength < 2) {
      onCloseTimer();
    }
  }, [storageLength]);

  if (storageLength > 1) {
    if (isOpenTimer) {
      return <IconButton icon="close" color="danger" onClick={onCloseTimer} />;
    } else {
      return <IconButton icon="timer" onClick={onOpenTimer} />;
    }
  }

  return null;
}
