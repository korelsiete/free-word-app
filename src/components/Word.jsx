import { useWord } from "../context/WordContext";

export default function Word() {
  const { word } = useWord();
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <h1 className="text-3xl font-bold text-center">{word?.word}</h1>
      <p className="text-xl text-center">{word?.meaning}</p>
    </div>
  );
}
