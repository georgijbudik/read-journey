export function shortenText(text: string, crop: number): string {
  if (text.length <= crop) {
    return text;
  }

  const shortText = text.slice(0, crop) + "...";

  return shortText;
}
