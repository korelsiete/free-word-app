export default function parseInput(input) {
  input = input.toLowerCase().trim();

  if (!input) return [];

  const results = [];

  const entries = input.split("/").filter((e) => e.trim() !== "");

  for (const entry of entries) {
    let i = 0;

    const wordMatch = /^[a-záéíóúüñ]+/i.exec(entry);
    if (!wordMatch) continue;

    const word = wordMatch[0];
    i = word.length;

    // Inicializar valores por defecto
    let gra = "nxn";
    let acento = "desconocido";
    let meaning = "";

    // --- Match `gra` ---
    if (entry[i] === "_") {
      i++;
      const graMatch = /^[a-z]+/.exec(entry.slice(i));
      if (graMatch) {
        gra = graMatch[0];
        i += gra.length;
      } else {
        results.push({ word, gra, acento, meaning });
        continue;
      }
    }

    // --- Match `acento` ---
    if (entry[i] === "-") {
      i++;
      const acentoMatch = /^(a|g|e)/.exec(entry.slice(i));
      if (acentoMatch) {
        switch (acentoMatch[0]) {
          case "a":
            acento = "aguda";
            break;
          case "g":
            acento = "grave";
            break;
          case "e":
            acento = "esdrújula";
            break;
        }
        i += acentoMatch[0].length;
      } else {
        results.push({ word, gra, acento, meaning });
        continue;
      }
    }

    // --- Match `meaning` ---
    if (entry[i] === "(") {
      i++;
      const endParen = entry.indexOf(")", i);
      if (endParen !== -1) {
        meaning = entry.slice(i, endParen);
        i = endParen + 1;
      } else {
        results.push({ word, gra, acento, meaning });
        continue;
      }
    }

    results.push({ word, gra, acento, meaning });
  }

  return results;
}
