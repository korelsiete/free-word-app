import useTimeStore from "../stores/useTimeStore";
import useToggleStore from "../stores/useToggleStore";
import useWordStore from "../stores/useWordStore";
import { Icon } from "./Button";
import { useEffect } from "react";
import { Link } from "react-router";

export default function RightSection() {
  const word = useWordStore((state) => state.current[0]);
  const length = useWordStore((state) => state.storage.length);
  const openAdd = useToggleStore((state) => state.openAdd);
  const openEdit = useToggleStore((state) => state.openEdit);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col gap-2 absolute right-3 top-3"
    >
      <Icon type="add" onClick={openAdd} />
      {word && <Icon type="edit" onClick={openEdit} />}
      {word && (
        <Link to="/groups">
          <Icon type="group" />
        </Link>
      )}
      {length > 1 && <TimerIconRender />}
    </div>
  );
}

function TimerIconRender() {
  const length = useWordStore((store) => store.storage.length);
  const openTimer = useToggleStore((state) => state.openTimer);
  const closeTimer = useToggleStore((state) => state.closeTimer);
  const isOpenTimer = useToggleStore((state) => state.isOpenTimer);
  const stop = useTimeStore((store) => store.stop);

  const onCloseTimer = () => {
    closeTimer();
    stop();
  };

  useEffect(() => {
    if (length < 2) {
      onCloseTimer();
    }
  }, [length]);

  if (length > 1) {
    if (isOpenTimer) {
      return <Icon type="close" color="danger" onClick={onCloseTimer} />;
    } else {
      return <Icon type="timer" onClick={openTimer} />;
    }
  }

  return null;
}
