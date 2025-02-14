type Lyrics = string[];
const hasYeah = (lyrics: Lyrics): boolean => lyrics.some((line) => line.toLowerCase().includes('yeah'));

const numYeahs = (lyrics: Lyrics): number => lyrics.reduce(
  (count, line) => count + (line.toLowerCase().match(/yeah/g) || []).length,
  0,
);
// Test cases
console.log(hasYeah(bieberBaby)); // Should print true
console.log(hasYeah(bieberBaby.slice(0, 2))); // Should print true
console.log(numYeahs(bieberBaby)); // Should print the number of occurrences of "yeah"
