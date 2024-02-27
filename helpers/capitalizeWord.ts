export function capitalizeWord(word: string): string {
  if (word.length === 0) {
    return word;
  }

  const firstLetter = word.charAt(0).toUpperCase();
  const restOfWord = word.slice(1);
  const capitalizedWord = firstLetter + restOfWord;
  return capitalizedWord;
}
