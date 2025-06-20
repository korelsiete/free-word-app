import edit from "../assets/edit.svg";
import add from "../assets/add.svg";
import close from "../assets/close.svg";
import timer from "../assets/timer.svg";
import restart from "../assets/restart.svg";
import pause from "../assets/pause.svg";
import play from "../assets/play.svg";
import group from "../assets/group.svg";
import control from "../assets/settingTime.svg";
import input from "../assets/input.svg";
import copy from "../assets/copy.svg";

function Button({
  children,
  size = "",
  styled = "btn-main",
  color = "main",
  ...props
}) {
  const colors = {
    main: "bg-gray-100 hover:bg-gray-300 text-black border-black",
    second:
      "bg-blue-600 hover:bg-blue-800 text-white border-blue-600 hover:border-blue-800",
    danger:
      "bg-red-500 hover:bg-red-600 text-white border-red-500 hover:border-red-600",
  };

  return (
    <button className={`${styled} ${colors[color]} ${size}`} {...props}>
      {children}
    </button>
  );
}

function IconButton({ icon, size = "medium", color = "main", ...props }) {
  const sizes = {
    small: "w-7 h-7",
    medium: "w-9 h-9",
    large: "w-11 h-11",
  };

  const icons = {
    edit,
    add,
    close,
    timer,
    restart,
    pause,
    play,
    group,
    control,
    input,
    copy,
  };

  return (
    <Button size={sizes[size]} color={color} styled="btn-icon" {...props}>
      <img src={icons[icon]} alt="Icon image" />
    </Button>
  );
}

export { Button, IconButton };
