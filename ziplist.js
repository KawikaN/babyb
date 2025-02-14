var hasYeah = function (lyrics) { return lyrics.some(function (line) { return line.toLowerCase().includes('yeah'); }); };
var numYeahs = function (lyrics) { return lyrics.reduce(function (count, line) { return count + (line.toLowerCase().match(/yeah/g) || []).length; }, 0); };
// Test cases
console.log(hasYeah(bieberBaby)); // Should print true
console.log(hasYeah(bieberBaby.slice(0, 2))); // Should print true
console.log(numYeahs(bieberBaby)); // Should print the number of occurrences of "yeah"
