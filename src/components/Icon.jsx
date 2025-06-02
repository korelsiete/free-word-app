import editSvg from "../assets/edit.svg";
import addSvg from "../assets/add.svg";
import closeSvg from "../assets/close.svg";
import timerSvg from "../assets/timer.svg";
import restartSvg from "../assets/restart.svg";
import pauseSvg from "../assets/pause.svg";
import playSvg from "../assets/play.svg";
import groupSvg from "../assets/group.svg";
import settingTimeSvg from "../assets/settingTime.svg";
import inputSvg from "../assets/input.svg";
import copySvg from "../assets/copy.svg";

function Icon({ imgUrl, altText = "Icon", size = "medium", ...props }) {
  const sizes = {
    verySmall: "w-5 h-5",
    small: "w-7 h-7",
    medium: "w-9 h-9",
    large: "w-11 h-11",
  };

  return (
    <div
      className={` ${sizes[size]} flex items-center justify-center rounded-full bg-gray-50 border-2 border-black p-1 cursor-pointer`}
      {...props}
    >
      <img src={imgUrl} alt={altText} />
    </div>
  );
}

function IconSecond({ imgUrl, altText = "Icon", bgcolor = "white", ...props }) {
  const colors = {
    blue: "bg-blue-500 hover:bg-blue-600",
    red: "bg-red-500 hover:bg-red-600",
    green: "bg-green-500 hover:bg-green-600",
    yellow: "bg-yellow-500 hover:bg-yellow-600",
    white: "bg-white hover:bg-gray-100",
  };

  return (
    <div
      className={`rounded-full flex items-center justify-center ${colors[bgcolor]} p-1  transition-all`}
      {...props}
    >
      <img src={imgUrl} alt={altText} />
    </div>
  );
}

function AddIcon({ ...props }) {
  return <Icon imgUrl={addSvg} {...props} />;
}

function EditIcon({ ...props }) {
  return <Icon imgUrl={editSvg} {...props} />;
}

function TimerIcon({ ...props }) {
  return <Icon imgUrl={timerSvg} {...props} />;
}

function RestartIcon({ ...props }) {
  return <Icon imgUrl={restartSvg} {...props} />;
}

function PauseIcon({ ...props }) {
  return <Icon imgUrl={pauseSvg} {...props} />;
}

function PlayIcon({ ...props }) {
  return <Icon imgUrl={playSvg} {...props} />;
}

function SettingTimeIcon({ ...props }) {
  return <Icon imgUrl={settingTimeSvg} {...props} />;
}

function GrupIcon({ ...props }) {
  return <Icon imgUrl={groupSvg} {...props} />;
}

function InputIcon({ ...props }) {
  return <Icon imgUrl={inputSvg} {...props} />;
}

function CopyIcon({ ...props }) {
  return <Icon imgUrl={copySvg} {...props} />;
}

function CloseIcon({ ...props }) {
  return <IconSecond imgUrl={closeSvg} bgcolor="red" {...props} />;
}

export {
  AddIcon,
  EditIcon,
  CloseIcon,
  TimerIcon,
  RestartIcon,
  PauseIcon,
  PlayIcon,
  SettingTimeIcon,
  GrupIcon,
  InputIcon,
  CopyIcon,
};
