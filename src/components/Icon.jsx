import editSvg from "../assets/edit.svg";
import addSvg from "../assets/add.svg";
import closeSvg from "../assets/close.svg";

function Icon({ imgUrl, altText = "Icon", ...props }) {
  return (
    <div
      className="w-8 h-8 rounded-full bg-gray-50 border-2 border-black p-1 cursor-pointer"
      {...props}
    >
      <img src={imgUrl} alt={altText} />
    </div>
  );
}

const colors = {
  blue: "bg-blue-500 hover:bg-blue-600",
  red: "bg-red-500 hover:bg-red-600",
  green: "bg-green-500 hover:bg-green-600",
  yellow: "bg-yellow-500 hover:bg-yellow-600",
  white: "bg-white hover:bg-gray-100",
};

function IconSecond({ imgUrl, altText = "Icon", bgcolor = "white", ...props }) {
  return (
    <div
      className={`w-6 h-6 rounded-full ${colors[bgcolor]} p-1 cursor-pointer transition-all`}
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

function CloseIcon({ ...props }) {
  return <IconSecond imgUrl={closeSvg} bgcolor="red" {...props} />;
}

export { AddIcon, EditIcon, CloseIcon };
