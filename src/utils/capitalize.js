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
    return string; // Return the original value if it's not a string or is empty
  }
  return string.toLowerCase().charAt(0).toUpperCase() + string.slice(1);
}

export { capFirstEnd, capFirst };
