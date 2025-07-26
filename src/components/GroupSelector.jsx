import useWordStore from "../stores/useWordStore";

export default function GroupSelector() {
  const storage = useWordStore((store) => store.storage);
  const groups = Object.keys(Object.groupBy(storage, ({ group }) => group));

  const handleChange = (e) => {
    const groupSelected = e.target.value;
    if (groupSelected) {
      const groupLocation = document.querySelector(groupSelected);
      if (groupLocation) {
        groupLocation.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <select
      className="bg-text border border-subtext text-background text-sm rounded-lg block text-center w-full p-2 max-w-[380px]"
      onChange={handleChange}
      name="gra"
      id="gra"
      defaultValue=""
    >
      <option value="" disabled selected>
        Search group
      </option>
      {groups.map((key) => (
        <option key={key} value={`#${key}`}>
          {key}
        </option>
      ))}
    </select>
  );
}
