import { useEffect, useState } from "react";
import "./App.css";
import { useWord } from "./context/WordContext";

function App() {
  const { word, getWord, saveWord, deleteWord, editWord } = useWord();
  const [wordEditing, setWordEditing] = useState("");
  const [meaningEditing, setMeaningEditing] = useState("");

  useEffect(() => {
    setWordEditing(word?.word || "");
    setMeaningEditing(word?.meaning || "");
  }, [word]);

  const handleSave = (e) => {
    e.preventDefault();
    const newWord = e.target.word.value.trim();
    const newMeaning = e.target.meaning.value.trim();
    if (!newWord) return;
    saveWord({ word: newWord, meaning: newMeaning, id: crypto.randomUUID() });
    e.target.reset();
  };

  const handleEdit = (e) => {
    e.preventDefault();
    if (!wordEditing.trim()) return;
    editWord({ word: wordEditing, meaning: meaningEditing, id: word.id });
  };

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-center">{word?.word}</h1>
        <p className="text-xl text-center">{word?.meaning}</p>
      </div>
      <button
        className="py-1 px-2 bg-amber-300 rounded-md mx-auto block"
        onClick={getWord}
      >
        Cambiar Palabra
      </button>

      <form onSubmit={handleEdit} className="form-container bg-blue-300">
        <input
          type="text"
          value={wordEditing}
          onChange={(e) => setWordEditing(e.target.value)}
          placeholder="Palabra"
        />
        <input
          type="text"
          value={meaningEditing}
          onChange={(e) => setMeaningEditing(e.target.value)}
          placeholder="Significado"
        />
        <div className="button-group">
          <button type="submit" className="btn btn-save">
            Guardar
          </button>
          <button
            type="button"
            className="btn btn-delete"
            onClick={() => deleteWord(word?.id)}
          >
            Eliminar
          </button>
        </div>
      </form>

      <form onSubmit={handleSave} className="form-container bg-stone-200">
        <input name="word" type="text" placeholder="Palabra" />
        <input name="meaning" type="text" placeholder="Significado" />
        <button type="submit" className="btn btn-add">
          Agregar
        </button>
      </form>
    </>
  );
}

export default App;
