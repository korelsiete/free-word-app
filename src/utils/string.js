function capFirstEnd(string) {
  if (typeof string !== "string" || string.length === 0) {
    return string;
  }

  string = string.toLowerCase();
  const restWord = string.slice(1);
  const firstChar = string.charAt(0).toUpperCase();
  const lastChar = restWord.charAt(restWord.length - 1).toUpperCase();

  if (string.length === 3) return firstChar + restWord.slice(0, -1) + lastChar;

  return firstChar + restWord;
}

function capFirst(string) {
  if (typeof string !== "string" || string.length === 0) {
    return string;
  }
  return string.toLowerCase().charAt(0).toUpperCase() + string.slice(1);
}

function compareStrings(a, b) {
  const al = a.length;
  const bl = b.length;

  if (a === b) return 0;
  if (al !== bl) return al - bl;

  const minLength = Math.min(al, bl);

  for (let i = 0; i < minLength; i++) {
    const char1 = a.charCodeAt(i);
    const char2 = b.charCodeAt(i);

    if (char1 !== char2) return char1 - char2;
  }
}

export { capFirstEnd, capFirst, compareStrings };
