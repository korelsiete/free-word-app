import { useWord } from "../context/WordContext";

export default function GroupSelector() {
  const { groupStorageKeys } = useWord();

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
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block text-center w-full p-2 mb-5 max-w-[380px]"
      onChange={handleChange}
      name="gra"
      id="gra"
      defaultValue=""
    >
      <option value="" disabled selected>
        Search group
      </option>
      {groupStorageKeys.map((key) => (
        <option key={key} value={`#${key}`}>
          {key}
        </option>
      ))}
    </select>
  );
}
