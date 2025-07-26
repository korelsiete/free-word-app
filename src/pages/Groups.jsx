import Layout from "../components/Layout";
import GroupCard from "../components/GroupCard";
import GroupSelector from "../components/GroupSelector";
import useWordStore from "../stores/useWordStore";
import { Icon } from "../components/Button";
import { Link } from "react-router";
import { compareStrings } from "../utils/string";

export default function Groups() {
  const storage = useWordStore((s) => s.storage);

  const grouped = Object.entries(
    Object.groupBy(storage, ({ group }) => group)
  ).sort(([a], [b]) => compareStrings(a, b));

  return (
    <Layout className="flex flex-col items-center gap-3 pt-4">
      <Link to="/" className="absolute top-4 right-4 cursor-pointer w-7 h-7">
        <Icon type="close" color="danger" size="small" />
      </Link>

      <h1 className="font-bold text-xl">Grupo de Rimas</h1>

      <GroupSelector />

      {grouped.map(([group, words]) => (
        <GroupCard key={group} groupName={group} groupWords={words} />
      ))}
    </Layout>
  );
}
