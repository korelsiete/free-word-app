export default function capitalizeFirstLetter(string) {
  if (typeof string !== "string" || string.length === 0) {
    return string; // Return the original value if it's not a string or is empty
  }
  return string.toLowerCase().charAt(0).toUpperCase() + string.slice(1);
}
