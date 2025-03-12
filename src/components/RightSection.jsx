import { useToogle } from "../context/ToogleContext";
import { useWord } from "../context/WordContext";
import { AddIcon, EditIcon } from "./Icon";

export default function RightSection() {
  const { word } = useWord();
  const { openAdd, openEdit } = useToogle();

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col gap-2 absolute right-3 top-3"
    >
      <AddIcon onClick={openAdd} />
      {word && <EditIcon onClick={openEdit} />}
    </div>
  );
}
