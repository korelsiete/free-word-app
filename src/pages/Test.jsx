import useWordStore from "../stores/useWordStore";
import GroupCard from "../components/GroupCard";
import { copyToClipboard } from "../utils/web";
import { useShallow } from "zustand/react/shallow";
import { useState, useEffect } from "react";
import { compareStrings } from "../utils/string";

export default function Test() {
  const current = useWordStore((state) => state.current);
  const changeCurrent = useWordStore((state) => state.changeCurrent);

  const word = current[0] || null;

  return (
    <div>
      <h1>Test Page</h1>
      <p>{word?.word}</p>
      <button onClick={changeCurrent}>Cambiar palabra</button>
      <div className="bg-green-300 p-2 rounded-lg mb-3">
        <AddForm />
      </div>
      <div className="bg-red-300 p-2 rounded-lg">
        <EditForm />
      </div>
      <div className="bg-blue-300 p-2 rounded-lg mt-3">
        <InputForm />
      </div>

      <Groups />
    </div>
  );
}

function Groups() {
  const storage = useWordStore((state) => state.storage);

  const grouped = Object.entries(
    Object.groupBy(storage, ({ group }) => group)
  ).sort(([a], [b]) => compareStrings(a, b));

  return (
    <section className="w-full flex flex-col items-center p-3 pt-6">
      <h1 className="text-center font-bold text-xl mb-5">Grupo de Rimas</h1>

      {grouped.map(([group, words]) => (
        <GroupCard key={group} groupName={group} groupWords={words} />
      ))}
    </section>
  );
}

function AddForm() {
  const saveWord = useWordStore((state) => state.saveWord);

  const handleSave = (e) => {
    e.preventDefault();

    const newWord = e.target.word.value.trim();
    if (!newWord) return;

    saveWord({
      word: newWord,
      meaning: e.target.meaning.value,
    });

    e.target.reset();
  };

  return (
    <form onSubmit={handleSave} className="form-container">
      <input
        name="word"
        type="text"
        placeholder="Palabra"
        className="form-input"
        required
      />
      <textarea
        name="meaning"
        type="text"
        placeholder="Significado"
        className="form-textarea"
      />
      <button className="btn-main" type="submit">
        Añadir
      </button>
    </form>
  );
}

function EditForm() {
  const [current, deleteWord, editWord] = useWordStore(
    useShallow((state) => [state.current, state.deleteWord, state.editWord])
  );

  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");

  useEffect(() => {
    setWord(current[0]?.word || "");
    setMeaning(current[0]?.meaning || "");
  }, [current]);

  const handleEdit = (e) => {
    e.preventDefault();

    editWord(current[0]?.id, {
      word,
      meaning,
    });
  };

  const handleDelete = () => {
    deleteWord(current[0]?.id);
  };

  return (
    <form onSubmit={handleEdit} className="form-container">
      <input
        type="text"
        name="word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Palabra"
        className="form-input"
      />
      <textarea
        name="meaning"
        value={meaning}
        onChange={(e) => setMeaning(e.target.value)}
        placeholder="Significado"
        className="form-textarea"
      />
      <div className="flex gap-2">
        <button className="btn-main" type="submit">
          Guardar
        </button>
        <button className="btn-main" type="button" onClick={handleDelete}>
          Eliminar
        </button>
      </div>
    </form>
  );
}

function InputForm() {
  const [saveInput, formattedStorage] = useWordStore(
    useShallow((state) => [state.saveInput, state.formattedStorage])
  );

  const handleInputSave = (e) => {
    e.preventDefault();

    const input = e.target.inputWords.value.trim();

    if (!input) return;

    saveInput(input);
    e.target.reset();
  };

  return (
    <form onSubmit={handleInputSave} className="form-container">
      <textarea
        name="inputWords"
        type="text"
        placeholder="Ingresa código de palabras"
        className="form-textarea"
        required
      />
      <button className="btn-main" type="submit">
        Añadir
      </button>
      <button
        className="btn-main"
        type="button"
        onClick={() => copyToClipboard(formattedStorage)}
      >
        Copiar palabras
      </button>
    </form>
  );
}
