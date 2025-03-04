import { useRef } from "react";
import "./App.css";
import { useWord } from "./context/WordContext";

function App() {
  const { actualWord, getRandomWord, saveWord } = useWord();
  const wordRef = useRef();
  const meaningRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    saveWord({ word: e.target[0].value, meaning: e.target[1].value });
    e.target.reset();
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center">{actualWord?.word}</h1>
      <p className="text-xl text-center">{actualWord?.meaning}</p>
      <button
        className="border-2 border-black p-1 rounded-md"
        onClick={getRandomWord}
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
        <button type="submit" className="bg-green-500 text-white p-2">
          Guardar
        </button>
      </form>
    </>
  );
}

export default App;
