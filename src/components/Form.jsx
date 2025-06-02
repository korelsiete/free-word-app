import { useEffect, useState } from "react";
import { useWord } from "../context/WordContext";
import { useToogle } from "../context/ToogleContext";
import { PrimaryButton, SecondaryButton } from "./Button";
import { useTimer } from "../context/TimerContext";
import { capFirst, capFirstEnd } from "../utils/capitalize";

function AddForm() {
  const { closeAdd } = useToogle();
  const { saveWord } = useWord();
  const [valueGRA, setValueGRA] = useState("");
  const valuesGRA = [
    "a",
    "e",
    "i",
    "o",
    "u",
    "axa",
    "axe",
    "axi",
    "axo",
    "axu",
    "exa",
    "exe",
    "exi",
    "exo",
    "exu",
    "ixa",
    "ixe",
    "ixi",
    "ixo",
    "ixu",
    "oxa",
    "oxe",
    "oxi",
    "oxo",
    "oxu",
    "uxa",
    "uxe",
    "uxi",
    "uxo",
    "uxu",
  ];

  const handleSave = (e) => {
    e.preventDefault();

    const newWord = e.target.word.value.trim();
    if (!newWord) return;

    saveWord({
      word: newWord,
      meaning: e.target.meaning.value,
      accent: e.target.accent.value,
      group: e.target.grupoRimaAsonante.value,
    });

    e.target.reset();
    closeAdd();
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
      <select
        name="grupoRimaAsonante"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 text-center"
        onChange={(e) => setValueGRA(e.target.value)}
        required
      >
        <option value="" disabled selected>
          Select G.R.A
        </option>
        {valuesGRA.map((value) => (
          <option key={value} value={value}>
            {capFirstEnd(value)}
          </option>
        ))}
      </select>

      <select
        name="accent"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 text-center"
        required
      >
        {valueGRA.length === 1 ? (
          <>
            <option value="aguda" selected disabled>
              Aguda
            </option>
          </>
        ) : (
          <>
            <option value="" disabled selected>
              Select acento
            </option>
            <option value="grave">Grave</option>
            <option value="esdrujula">Esdrujula</option>
          </>
        )}
      </select>
      <PrimaryButton type="submit">Añadir</PrimaryButton>
    </form>
  );
}

function EditForm() {
  const { closeEdit } = useToogle();
  const { word, deleteWord, editWord } = useWord();
  const [wordEditing, setWordEditing] = useState("");
  const [meaningEditing, setMeaningEditing] = useState("");

  const handleEdit = (e) => {
    e.preventDefault();

    if (!wordEditing.trim()) return;

    editWord(word?.id, {
      word: wordEditing,
      meaning: meaningEditing.trim(),
    });

    closeEdit();
  };

  const handleDelete = () => {
    deleteWord(word?.id);
    closeEdit();
  };

  useEffect(() => {
    setWordEditing(word?.word || "");
    setMeaningEditing(word?.meaning || "");
  }, [word]);

  return (
    <form onSubmit={handleEdit} className="form-container">
      <input
        type="text"
        value={capFirst(wordEditing)}
        onChange={(e) => setWordEditing(e.target.value)}
        placeholder="Palabra"
        className="form-input"
      />
      <textarea
        type="text"
        value={meaningEditing}
        onChange={(e) => setMeaningEditing(e.target.value)}
        placeholder="Significado"
        className="form-textarea"
      />
      <div className="flex gap-2">
        <PrimaryButton type="submit">Guardar</PrimaryButton>
        <SecondaryButton type="button" onClick={handleDelete}>
          Eliminar
        </SecondaryButton>
      </div>
    </form>
  );
}

function EditTimeForm() {
  const { closeTimeEdit } = useToogle();
  const {
    newDuration,
    setNewDuration,
    setDuration,
    setTimeLeft,
    setIsRunning,
  } = useTimer();

  const handleEditTime = (e) => {
    e.preventDefault();
    setDuration(newDuration);
    setTimeLeft(newDuration);
    setIsRunning(true);
    closeTimeEdit();
  };

  return (
    <form className="form-container" onSubmit={handleEditTime}>
      <label className="block text-gray-700 text-md font-bold">
        Ajustar duración (segundos):
      </label>
      <input
        type="number"
        step="1"
        min="1"
        value={newDuration}
        onChange={(e) => setNewDuration(parseInt(e.target.value, 10) || 1)}
        className="w-full p-2 border rounded-md text-center"
      />
      <PrimaryButton type="submit">Aplicar duración</PrimaryButton>
    </form>
  );
}

function InputForm() {
  const { closeInput } = useToogle();
  const { saveInputWords } = useWord();
  const [inputValue, setInputValue] = useState("");

  const handleInputSave = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    saveInputWords(inputValue);

    setInputValue("");
    closeInput();
  };

  return (
    <form onSubmit={handleInputSave} className="form-container">
      <textarea
        type="text"
        placeholder="Ingresa código de palabras"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="form-inputWord"
        required
      />
      <PrimaryButton type="submit">Añadir</PrimaryButton>
    </form>
  );
}

export { AddForm, EditForm, EditTimeForm, InputForm };
