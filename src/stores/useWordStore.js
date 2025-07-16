import { create } from "zustand";
import { shuffleArray } from "../utils/array";
import { capFirst, capFirstEnd } from "../utils/string";

const DEFAULT = "Unknown";
const GROUPS = [
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

const formatWord = (obj, id = null) => ({
  word: capFirst(obj.word),
  meaning: capFirst(obj.meaning.trim()),
  id: id || crypto.randomUUID(),
  group: capFirstEnd(obj.group) || DEFAULT,
  accent: capFirst(obj.accent) || DEFAULT,
});

const parseText = (text) => {
  const groups = new Set(GROUPS);
  const accents = {
    a: "aguda",
    g: "grave",
    e: "esdrújula",
  };

  if (!text || typeof text !== "string") return [];

  return text.split("/").reduce((acc, word) => {
    if (!word) return acc;

    const parts = word.split("-");
    const [w, g, a, ...m] = parts;

    if (w) {
      acc.push({
        word: w,
        group: groups.has(g) ? g : DEFAULT,
        accent: accents[a] || DEFAULT,
        meaning: m.length ? m.join("-") : "",
      });
    }

    return acc;
  }, []);
};

const formatArray = (arr) => {
  const accents = {
    aguda: "a",
    grave: "g",
    esdrújula: "e",
  };

  return arr
    .reduce((acc, { word, group, accent, meaning }) => {
      let f = word.toLowerCase();

      if (group && group !== DEFAULT) f += `-${group.toLowerCase()}`;
      if (accent && accent !== DEFAULT) f += `-${accents[accent.toLowerCase()] || ""}`;
      if (meaning) f += `-${meaning.toLowerCase()}`;

      acc.push(f);
      return acc;
    }, [])
    .join("/");
};

const loadLocalStorage = (key) => {
  const data = JSON.parse(localStorage.getItem(key));
  return data || [];
};

const saveLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const useWordStore = create((set, get) => {
  const init = loadLocalStorage("words");

  return {
    storage: init,
    current: shuffleArray(init),
    history: [],

    get groups() {
      return GROUPS;
    },

    get accents() {
      return ["aguda", "grave", "esdrújula"];
    },

    get storageCode() {
      return formatArray(get().storage);
    },

    changeCurrent: () => {
      const { current, history } = get();

      if (current.length <= 1) {
        if (!history.length) return;

        const h = current.length
          ? history.filter((w) => w.id !== current[0].id)
          : history;

        return set({
          history: current,
          current: shuffleArray(h),
        });
      }

      set({
        history: [current[0], ...history],
        current: current.slice(1),
      });
    },

    saveInput: (input) => {
      const storage = loadLocalStorage("words");
      const existing = new Set(storage.map((w) => w.word));
      const words = parseText(input);

      const uniques = words
        .filter((w) => !existing.has(w.word))
        .map((w) => formatWord(w));

      const upStorage = [...storage, ...uniques];
      const upCurrent = [...get().current, ...uniques];

      saveLocalStorage("words", upStorage);
      set({ storage: upStorage, current: upCurrent });
    },

    saveWord: (n) => {
      n = formatWord(n);
      const storage = loadLocalStorage("words");
      const { current } = get();

      if (storage.some((w) => w.word === n.word)) return;

      const upStorage = [...storage, n];
      const upCurrent = [...current, n];

      saveLocalStorage("words", upStorage);
      set({ storage: upStorage, current: upCurrent });
    },

    deleteWord: (id) => {
      const storage = loadLocalStorage("words");
      const { current, history, changeCurrent } = get();

      const upList = (list) => list.filter((w) => w.id !== id);

      saveLocalStorage("words", upList(storage));
      set({
        storage: upList(storage),
        current: upList(current),
        history: upList(history),
      });
      changeCurrent();
    },

    editWord: (id, n) => {
      n = formatWord(n, id);

      const storage = loadLocalStorage("words");
      const { current, history } = get();

      const upList = (list) =>
        list.map((w) => (w.id === id ? { ...w, ...n } : w));

      saveLocalStorage("words", upList(storage));
      set({
        storage: upList(storage),
        current: upList(current),
        history: upList(history),
      });
    },
  };
});

export default useWordStore;
