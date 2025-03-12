import { useWord } from "../context/WordContext";
import WithoutWords from "./WithoutWords";

export default function Word() {
  const { word } = useWord();
  return (
    <div onClick={(e) => e.stopPropagation()}>
      {!word && <WithoutWords />}
      <h1 className="text-3xl font-bold text-center">{word?.word}</h1>
      <p className="text-xl text-center">{word?.meaning}</p>
    </div>
  );
}
