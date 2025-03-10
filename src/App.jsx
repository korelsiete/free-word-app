import { useEffect, useRef, useState } from "react";
import "./App.css";
import { useWord } from "./context/WordContext";

function App() {
  const { word, getWord, saveWord, deleteWord, editWord } = useWord();
  const inputWordRef = useRef();
  const inputMeaningRef = useRef();
  const [wordEditing, setWordEditing] = useState(word?.word);
  const [meaningEditing, setMeaningEditing] = useState(word?.meaning);

  const handleSave = (e) => {
    e.preventDefault();
    saveWord({
      word: inputWordRef.current.value,
      meaning: inputMeaningRef.current.value,
      id: crypto.randomUUID(),
    });
    e.target.reset();
  };

  const handleEdit = (e) => {
    e.preventDefault();
    editWord({
      word: wordEditing,
      meaning: meaningEditing,
      id: word.id,
    });
  };

  useEffect(() => {
    setWordEditing(word?.word);
    setMeaningEditing(word?.meaning);
  }, [word]);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-center">{word?.word}</h1>
        <p className="text-xl text-center">{word?.meaning}</p>
      </div>
      <button
        className="py-1 px-2 bg-amber-300 rounded-md mx-auto block"
        onClick={getWord}
        type="button"
      >
        Cambiar Palabra
      </button>

      <form
        onSubmit={handleEdit}
        className="flex flex-col gap-3 px-3 py-4 bg-blue-300 mx-3 rounded-sm mt-3"
      >
        <input
          type="text"
          value={wordEditing}
          onChange={(e) => setWordEditing(e.target.value)}
          className="border rounded-sm p-1 max-w-sm bg-white text-black"
        />
        <input
          type="text"
          value={meaningEditing}
          onChange={(e) => setMeaningEditing(e.target.value)}
          className="border rounded-sm p-1 max-w-sm bg-white text-black"
        />
        <div className="flex flex-row gap-3 justify-center">
          <button
            type="submit"
            className="bg-blue-700 text-white py-1 px-2 block"
          >
            Guardar
          </button>
          <button
            className="bg-red-500 text-white p-1 px-2 block"
            onClick={() => deleteWord(word?.id)}
            type="button"
          >
            Eliminar
          </button>
        </div>
      </form>

      <form
        onSubmit={handleSave}
        className="flex flex-col gap-3 px-3 py-4 bg-stone-200 mx-3 rounded-sm mt-3"
      >
        <input
          ref={inputWordRef}
          type="text"
          placeholder="Palabra"
          className="border rounded-sm p-1 max-w-sm bg-white"
        />
        <input
          ref={inputMeaningRef}
          type="text"
          placeholder="Significado"
          className="border rounded-sm p-1 max-w-sm bg-white"
        />
        <button
          type="submit"
          className="bg-green-500 text-white py-1 px-2 mx-auto block"
        >
          Agregar
        </button>
      </form>
    </>
  );
}

export default App;
