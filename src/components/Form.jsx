import useToggleStore from "../stores/useToggleStore";
import useTimeStore from "../stores/useTimeStore";
import useWordStore from "../stores/useWordStore";
import { useEffect, useState } from "react";
import { Button } from "./Button";

function AddForm() {
  const closeAdd = useToggleStore((state) => state.closeAdd);
  const saveWord = useWordStore((state) => state.saveWord);
  const groups = useWordStore((state) => state.groups);

  const [group, setGroup] = useState("");

  const handleSave = (e) => {
    e.preventDefault();

    const word = e.target.word.value.trim();
    if (!word) return;

    saveWord({
      word: word,
      meaning: e.target.meaning.value,
      accent: e.target.accent.value,
      group: group,
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
        name="group"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 text-center"
        onChange={(e) => setGroup(e.target.value)}
        required
      >
        <option value="" disabled selected>
          Grupo
        </option>
        {groups.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>

      <select
        name="accent"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 text-center"
        required
      >
        {group.length === 1 ? (
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
            <option value="esdrújula">Esdrujula</option>
          </>
        )}
      </select>
      <Button type="submit">Añadir</Button>
    </form>
  );
}

function EditForm() {
  const closeEdit = useToggleStore((state) => state.closeEdit);
  const word = useWordStore((state) => state.current[0]);
  const deleteWord = useWordStore((state) => state.deleteWord);
  const editWord = useWordStore((state) => state.editWord);

  const [wordEditing, setWordEditing] = useState("");
  const [meaningEditing, setMeaningEditing] = useState("");

  const handleEdit = (e) => {
    e.preventDefault();

    if (!wordEditing.trim()) return;

    editWord(word?.id, {
      word: wordEditing,
      meaning: meaningEditing,
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
        <Button type="submit" color="second">
          Guardar
        </Button>
        <Button type="button" color="danger" onClick={handleDelete}>
          Eliminar
        </Button>
      </div>
    </form>
  );
}

function EditTimeForm() {
  const closeTimeEdit = useToggleStore((state) => state.closeTimeEdit);
  const duration = useTimeStore((state) => state.duration);
  const setDuration = useTimeStore((state) => state.setDuration);
  const [newDuration, setNewDuration] = useState(duration);

  const handleEditTime = (e) => {
    e.preventDefault();
    setDuration(newDuration);
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
        onChange={(e) => setNewDuration(parseInt(e.target.value, 10))}
        className="w-full p-2 border rounded-md text-center"
      />
      <Button type="submit">Aplicar duración</Button>
    </form>
  );
}

function InputForm() {
  const closeInput = useToggleStore((state) => state.closeInput);
  const saveInput = useWordStore((state) => state.saveInput);

  const [inputValue, setInputValue] = useState("");

  const handleInputSave = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    saveInput(inputValue);

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
      <Button type="submit">Añadir</Button>
    </form>
  );
}

export { AddForm, EditForm, EditTimeForm, InputForm };
