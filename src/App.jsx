import { useRef } from "react";
import "./App.css";
import { useWord } from "./context/WordContext";

function App() {
  const { word, getWord, saveWord, deleteWord } = useWord();
  const wordRef = useRef();
  const meaningRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    saveWord({
      word: wordRef.current.value,
      meaning: meaningRef.current.value,
      id: crypto.randomUUID(),
    });
    e.target.reset();
  };

  return (
    <>
      <div className="flex flex-row gap-4 justify-center mb-4">
        <div>
          <h1 className="text-3xl font-bold text-center">{word?.word}</h1>
          <p className="text-xl text-center">{word?.meaning}</p>
        </div>
        {word && (
          <button
            className="bg-red-500 text-white text-sm font-semibold p-1 rounded-sm block"
            onClick={() => deleteWord(word?.id)}
            type="button"
          >
            Eliminar
          </button>
        )}
      </div>
      <button
        className="border-2 border-black p-1 rounded-md mx-auto block"
        onClick={getWord}
        type="button"
      >
        Cambiar Palabra
      </button>

      <form onSubmit={handleSubmit} className="p-4 space-y-4">
        <input
          ref={wordRef}
          type="text"
          placeholder="Palabra"
          className="border p-2 w-full"
        />
        <input
          ref={meaningRef}
          type="text"
          placeholder="Significado"
          className="border p-2 w-full"
        />
        <button
          type="submit"
          className="bg-green-500 text-white p-2 mx-auto block"
        >
          Guardar
        </button>
      </form>
    </>
  );
}

export default App;
