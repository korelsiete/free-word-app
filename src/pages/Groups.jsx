import GroupSelector from "../components/GroupSelector";
import GroupCard from "../components/GroupCard";
import { Link } from "react-router";
import { useWord } from "../context/WordContext";
import { IconButton } from "../components/Button";

export default function Groups() {
  const { groupStorageOrdered } = useWord();

  return (
    <section className="w-full h-screen flex flex-col items-center p-3 pt-6">
      <Link to="/" className="absolute top-4 right-4 cursor-pointer w-7 h-7">
        <IconButton icon="close" color="danger" size="small" />
      </Link>

      <h1 className="text-center font-bold text-xl mb-5">Grupo de Rimas</h1>

      <GroupSelector />

      {groupStorageOrdered.map(([name, words]) => (
        <GroupCard key={name} groupName={name} groupWords={words} />
      ))}
    </section>
  );
}
