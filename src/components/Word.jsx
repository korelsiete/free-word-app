import useWordStore from "../stores/useWordStore";
import useToggleStore from "../stores/useToggleStore";
import { Button } from "./Button";

export default function Word() {
  const word = useWordStore((state) => state.current[0] || null);

  return (
    <div
      className={`w-full max-w-[18rem] flex flex-col items-center absolute top-[40%] left-1/2 transform -translate-x-1/2 text-center cursor-default`}
    >
      {!word && <WordLess />}
      <h1 className="font-black text-[1.4rem]">{word?.word}</h1>
      <p className="font-normal text-sm text-subtext">{word?.meaning}</p>
    </div>
  );
}

function WordLess() {
  const openAdd = useToggleStore((state) => state.openAdd);

  return (
    <>
      <p className="text-md font-bold mb-1">
        Aún no has agregado ninguna palabra
      </p>
      <Button onClick={openAdd}>Agregar +</Button>
    </>
  );
}
