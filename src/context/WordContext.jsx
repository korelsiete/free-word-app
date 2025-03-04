import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { getRandomInt } from "../utils/mathUtils";

// 1️⃣ Crear el contexto
const WordContext = createContext();

// 2️⃣ Proveedor del contexto
export function WordProvider({ children }) {
  const [words, setWords] = useLocalStorage("words", []);
  const [actualWord, setActualWord] = useState(
    words[getRandomInt(words.length)]
  );

  const getRandomWord = () => {
    const randomIndex = getRandomInt(words.length);
    setActualWord(words[randomIndex]);
  };

  const saveWord = (word) => {
    setWords([...words, word]);
  };

  return (
    <WordContext.Provider value={{ actualWord, getRandomWord, saveWord }}>
      {children}
    </WordContext.Provider>
  );
}

// 3️⃣ Hook para acceder al contexto fácilmente
export function useWord() {
  return useContext(WordContext);
}
