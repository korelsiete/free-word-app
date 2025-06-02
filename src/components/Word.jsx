import { useWord } from "../context/WordContext";
import { capFirst } from "../utils/capitalize";
import WithoutWords from "./WithoutWords";

export default function Word() {
  const { word } = useWord();
  return (
    <div className="text-container absolute top-0 left-[50%] translate-x-[-50%] translate-y-[100%] h-[40%] flex flex-col justify-baseline gap-1">
      {!word && <WithoutWords />}
      <h1 onClick={(e) => e.stopPropagation()} className="text-responsive word">
        {capFirst(word?.word)}
      </h1>
      <p
        onClick={(e) => e.stopPropagation()}
        className="text-responsive meaning px-2"
      >
        {word?.meaning}
      </p>
    </div>
  );
}
