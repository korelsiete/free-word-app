import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { getRandomInt } from "../utils/mathUtils";

// 1️⃣ Crear el contexto
const WordContext = createContext();

// 2️⃣ Proveedor del contexto
export function WordProvider({ children }) {
  const [storage, saveStorage] = useLocalStorage("words", []);
  const [copyStorage, setCopyStorage] = useState(storage);
  const [temporal, setTemporal] = useState([]);
  const word = temporal[0];

  const getWord = () => {
    const copyWord = copyStorage[getRandomInt(copyStorage.length)];
    if (!copyWord) return;

    setCopyStorage(copyStorage.filter((w) => w.id !== copyWord.id));
    setTemporal([copyWord, ...temporal]);
  };

  const saveWord = (word) => {
    saveStorage([...storage, word]);
    setCopyStorage([...copyStorage, word]);
  };

  useEffect(() => {
    getWord();
  }, []);

  useEffect(() => {
    if (copyStorage.length === 1 && temporal.length === 0) {
      getWord();
    }
    if (copyStorage.length === 0 && temporal.length > 1) {
      setCopyStorage(temporal.slice(1));
      setTemporal(temporal.slice(0, 1));
    }
  }, [copyStorage, temporal]);

  return (
    <WordContext.Provider value={{ word, getWord, saveWord }}>
      {children}
    </WordContext.Provider>
  );
}

// 3️⃣ Hook para acceder al contexto fácilmente
export function useWord() {
  return useContext(WordContext);
}
