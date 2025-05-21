import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { getRandomInt } from "../utils/mathUtils";

const WordContext = createContext();

export function WordProvider({ children }) {
  const [storage, setStorage] = useLocalStorage("words", []);
  const [availableWords, setAvailableWords] = useState(storage);
  const [wordHistory, setWordHistory] = useState([]);
  const word = wordHistory[0] || null;
  const storageLength = storage.length;
  const groupStorage = storage.reduce((acc, word) => {
    const group = word.group || "No Group";

    if (!acc[group]) {
      acc[group] = [];
    }

    const wordData = {
      word: word.word,
      accent: word.accent,
      id: word.id,
    };

    acc[group].push(wordData);

    return acc;
  }, {});
  const groupStorageKeys = Object.keys(groupStorage);

  useEffect(() => {
    if (!word) selectRandomWord();

    if (availableWords.length === 0 && wordHistory.length > 1) {
      setAvailableWords(wordHistory.slice(1));
      setWordHistory(wordHistory.slice(0, 1));
    }
  }, [availableWords, wordHistory]);

  const selectRandomWord = () => {
    if (availableWords.length === 0) return;
    const randomIndex = getRandomInt(availableWords.length);
    const selectedWord = availableWords[randomIndex];
    setAvailableWords(availableWords.filter((w) => w.id !== selectedWord.id));
    setWordHistory([selectedWord, ...wordHistory]);
  };

  const saveWord = (newWord) => {
    setStorage([...storage, newWord]);
    setAvailableWords([...availableWords, newWord]);
  };

  const deleteWord = (id) => {
    const updatedStorage = storage.filter((w) => w.id !== id);
    setStorage(updatedStorage);
    setAvailableWords(availableWords.filter((w) => w.id !== id));
    setWordHistory(wordHistory.filter((w) => w.id !== id));
  };

  const editWord = (updatedWord) => {
    const updateList = (list) =>
      list.map((w) => (w.id === updatedWord.id ? updatedWord : w));
    setStorage(updateList(storage));
    setAvailableWords(updateList(availableWords));
    setWordHistory(updateList(wordHistory));
  };

  return (
    <WordContext.Provider
      value={{
        word,
        getWord: selectRandomWord,
        saveWord,
        deleteWord,
        editWord,
        storageLength,
        groupStorage,
        groupStorageKeys,
      }}
    >
      {children}
    </WordContext.Provider>
  );
}

export function useWord() {
  return useContext(WordContext);
}
