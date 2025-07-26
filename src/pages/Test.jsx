import {
  AdjustmentsHorizontalIcon,
  ArrowPathIcon,
  ClipboardDocumentListIcon,
  ClockIcon,
  ItalicIcon,
  PauseIcon,
  PencilIcon,
  PlayIcon,
  PlusIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import Layout from "../components/Layout";
import ThemeToggle from "../components/ThemeToggle";

export default function Test() {
  return (
    <Layout>
      <ThemeToggle />
      <Button color="danger">Hola!!</Button>
      <Button>Hola!!</Button>
      <Icon type="add" />
    </Layout>
  );
}

function Button({
  children,
  onClick = null,
  color = "primary",
  className = "",
}) {
  const schema = {
    primary:
      "text-white bg-primary hover:bg-primary-dark dark:shadow-lg dark:shadow-primary-dark/50 ring-primary-light dark:hover:ring-2 dark:ring-white",
    danger: "text-white bg-red-500 hover:bg-red-600",
  };

  return (
    <button
      className={`button rounded-sm px-2 py-1 ${schema[color]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

const icons = {
  add: <PlusIcon />,
  close: <XMarkIcon />,
  control: <AdjustmentsHorizontalIcon />,
  copy: <ClipboardDocumentListIcon />,
  edit: <PencilIcon />,
  group: <Squares2X2Icon />,
  input: <ItalicIcon />,
  pause: <PauseIcon />,
  play: <PlayIcon />,
  restart: <ArrowPathIcon />,
  timer: <ClockIcon />,
};

function Icon({
  onClick = null,
  color = "primary",
  size = "normal",
  className = "",
  type,
}) {
  const sizes = {
    small: "size-7",
    normal: "size-9",
  };

  const schema = {
    primary:
      "bg-secondary hover:bg-secondary-dark dark:shadow-lg dark:shadow-secondary/50",
    danger: "text-white bg-red-500 hover:bg-red-600",
  };

  return (
    <div
      className={`button rounded-full p-1 ${sizes[size]} ${schema[color]} ${className}`}
      onClick={onClick}
    >
      {icons[type]}
    </div>
  );
}
