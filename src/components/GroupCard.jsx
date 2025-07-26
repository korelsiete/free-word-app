export default function GroupCard({ groupName, groupWords }) {
  return (
    <table id={groupName} className="block w-full max-w-[380px] mb-5">
      <thead className="w-full inline-table">
        <tr className="bg-text">
          <th className="text-background font-medium py-[2px]">{groupName}</th>
        </tr>
      </thead>
      <tbody className="w-full inline-table">
        {groupWords.map(({ word, id, accent }) => (
          <tr
            key={id}
            className="w-full flex justify-around items-center py-[2px] border-x border-b border-gray-400"
          >
            <th className="font-bold text-md">{word}</th>
            <td className="font-normal text-subtext">{accent}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
