import { useEffect, useState } from "react";
import { useWord } from "../context/WordContext";
import { useToogle } from "../context/ToogleContext";
import { PrimaryButton, SecondaryButton } from "./Button";

function AddForm() {
  const { closeAdd } = useToogle();
  const { saveWord } = useWord();

  const handleSave = (e) => {
    e.preventDefault();
    const newWord = e.target.word.value.trim();
    const newMeaning = e.target.meaning.value.trim();
    if (!newWord) return;
    saveWord({ word: newWord, meaning: newMeaning, id: crypto.randomUUID() });
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
      />
      <textarea
        name="meaning"
        type="text"
        placeholder="Significado"
        className="form-textarea"
      />
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

export { AddForm, EditForm };
