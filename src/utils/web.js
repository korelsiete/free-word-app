async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    await navigator.clipboard.writeText("");
  }
}

export { copyToClipboard };
