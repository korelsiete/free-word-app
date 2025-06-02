export default function formatStorage(stored) {
  const formatted = stored.map(({ word, gra, acento, meaning }) => {
    let result = word;

    if (gra && gra !== "nxn") {
      result += `_${gra}`;
    }

    if (acento && acento.toLowerCase() !== "desconocido") {
      result += `-${acento}`;
    }

    if (meaning && meaning.trim() !== "") {
      result += `(${meaning})`;
    }

    return result + "/";
  });

  return formatted.join("");
}
