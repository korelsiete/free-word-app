import GroupSelector from "../components/GroupSelector";
import GroupCard from "../components/GroupCard";
import useWordStore from "../stores/useWordStore";
import { Link } from "react-router";
import { IconButton } from "../components/Button";
import { compareStrings } from "../utils/string";

export default function Groups() {
  const storage = useWordStore((state) => state.storage);

  const grouped = Object.entries(
    Object.groupBy(storage, ({ group }) => group)
  ).sort(([a], [b]) => compareStrings(a, b));

  return (
    <section className="w-full h-screen flex flex-col items-center p-3 pt-6">
      <Link to="/" className="absolute top-4 right-4 cursor-pointer w-7 h-7">
        <IconButton icon="close" color="danger" size="small" />
      </Link>

      <h1 className="text-center font-bold text-xl mb-5">Grupo de Rimas</h1>

      <GroupSelector />

      {grouped.map(([group, words]) => (
        <GroupCard key={group} groupName={group} groupWords={words} />
      ))}
    </section>
  );
}
