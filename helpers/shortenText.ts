export function shortenText(text: string, crop: number): string {
  if (text.length <= crop) {
    return text;
  }

  const shortText: string = text.slice(0, crop);

  if (shortText === shortText.toUpperCase()) {
    return (
      shortText.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase()) +
      "..."
    );
  }

  return shortText + "...";
}
