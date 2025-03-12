import { useToogle } from "../context/ToogleContext";
import { AddIcon, EditIcon } from "./Icon";

export default function RightSection() {
  const { openAdd, openEdit } = useToogle();

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col gap-2 absolute right-3 top-3"
    >
      <AddIcon onClick={openAdd} />
      <EditIcon onClick={openEdit} />
    </div>
  );
}
