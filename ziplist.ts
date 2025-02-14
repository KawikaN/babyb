/**
 * Checks if any string in the array contains the word 'yeah' (case-insensitive).
 * @param lyrics - Array of strings to search through.
 * @returns true if 'yeah' is found in any string, false otherwise.
 */
const hasYeah = (lyrics: Lyrics): boolean => lyrics.some((line) => line.toLowerCase().includes('yeah'));

/**
 * Counts how many times 'yeah' appears in the array of strings (case-insensitive).
 * @param lyrics - Array of strings to search through.
 * @returns Number of occurrences of 'yeah'.
 */
const numYeahs = (lyrics: Lyrics): number => lyrics.reduce(
  (count, line) => count + (line.toLowerCase().match(/yeah/g) || []).length,
  0,
);
// Test cases
console.log(hasYeah(bieberBaby)); // Should print true
console.log(hasYeah(bieberBaby.slice(0, 2))); // Should print true
console.log(numYeahs(bieberBaby)); // Should print the number of occurrences of "yeah"
console.log(numYeahs(bieberBaby.slice(0, 2))); // Should count "yeah" in the first two line
