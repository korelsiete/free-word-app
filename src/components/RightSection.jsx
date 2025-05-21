import { useEffect } from "react";
import { useTimer } from "../context/TimerContext";
import { useToogle } from "../context/ToogleContext";
import { useWord } from "../context/WordContext";
import { AddIcon, EditIcon, TimerIcon, CloseIcon, GrupIcon } from "./Icon";

export default function RightSection() {
  const { word, storageLength } = useWord();
  const { openAdd, openEdit, openGroup } = useToogle();

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col gap-2 absolute right-3 top-3"
    >
      <AddIcon onClick={openAdd} />
      {word && <EditIcon onClick={openEdit} />}
      {word && <GrupIcon onClick={openGroup} />}
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
      return <CloseIcon onClick={onCloseTimer} />;
    } else {
      return <TimerIcon onClick={onOpenTimer} />;
    }
  }

  return null;
}
