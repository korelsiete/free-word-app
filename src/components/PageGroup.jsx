import { useToogle } from "../context/ToogleContext";
import { useWord } from "../context/WordContext";
import GroupCard from "./GroupCard";
import GroupSelector from "./GroupSelector";
import { CloseIcon } from "./Icon";

export default function PageGroup() {
  const { closeGroup } = useToogle();
  const { groupStorageOrdered } = useWord();

  return (
    <section className="w-full h-screen flex flex-col items-center p-3 pt-6">
      <span
        className="absolute top-4 right-4 cursor-pointer w-7 h-7"
        onClick={closeGroup}
      >
        <CloseIcon />
      </span>

      <h1 className="text-center font-bold text-xl mb-5">Grupo de Rimas</h1>

      <GroupSelector />

      {groupStorageOrdered.map(([name, words]) => (
        <GroupCard key={name} groupName={name} groupWords={words} />
      ))}
    </section>
  );
}
