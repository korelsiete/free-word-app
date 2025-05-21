import { useEffect, useState } from "react";
import { useWord } from "../context/WordContext";
import { useToogle } from "../context/ToogleContext";
import { PrimaryButton, SecondaryButton } from "./Button";
import { useTimer } from "../context/TimerContext";

function AddForm() {
  const { closeAdd } = useToogle();
  const { saveWord } = useWord();

  const handleSave = (e) => {
    e.preventDefault();
    const newWord = e.target.word.value.trim();
    const newMeaning = e.target.meaning.value.trim();
    const accentSelect = e.target.accent.value;
    const groupSelect = e.target.grupoRimaAsonante.value;
    if (!newWord) return;

    saveWord({
      word: newWord,
      meaning: newMeaning,
      accent: accentSelect,
      group: groupSelect,
      id: crypto.randomUUID(),
    });
    closeAdd();
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
      <select
        name="grupoRimaAsonante"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 text-center"
        required
      >
        <option value="" disabled selected>
          Select G.R.A
        </option>
        <option value="A">A</option>
        <option value="E">E</option>
        <option value="I">I</option>
        <option value="O">O</option>
        <option value="U">U</option>

        <option value="AxA">AxA</option>
        <option value="AxE">AxE</option>
        <option value="AxI">AxI</option>
        <option value="AxO">AxO</option>
        <option value="AxU">AxU</option>

        <option value="ExA">ExA</option>
        <option value="ExE">ExE</option>
        <option value="ExI">ExI</option>
        <option value="ExO">ExO</option>
        <option value="ExU">ExU</option>

        <option value="IxA">IxA</option>
        <option value="IxE">IxE</option>
        <option value="IxI">IxI</option>
        <option value="IxO">IxO</option>
        <option value="IxU">IxU</option>

        <option value="OxA">OxA</option>
        <option value="OxE">OxE</option>
        <option value="OxI">OxI</option>
        <option value="OxO">OxO</option>
        <option value="OxU">OxU</option>

        <option value="UxA">UxA</option>
        <option value="UxE">UxE</option>
        <option value="UxI">UxI</option>
        <option value="UxO">UxO</option>
        <option value="UxU">UxU</option>
      </select>

      <select
        name="accent"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 text-center"
        required
      >
        <option value="" disabled selected>
          Select acento
        </option>
        <option value="Aguda">Aguda</option>
        <option value="Grave">Grave</option>
        <option value="Esdrujula">Esdrujula</option>
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
    editWord({ word: wordEditing, meaning: meaningEditing, id: word.id });
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
        value={wordEditing}
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

export { AddForm, EditForm, EditTimeForm };
