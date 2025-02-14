"use strict";
/**
 * Checks if any string in the array contains the word 'yeah' (case-insensitive)
 * @param lyrics - Array of strings to search through
 * @returns true if 'yeah' is found in any string, false otherwise
 */
const hasYeah = (lyrics) => lyrics.some((line) => line.toLowerCase().includes('yeah'));
/**
 * Counts how many times 'yeah' appears in the array of strings (case-insensitive)
 * @param lyrics - Array of strings to search through
 * @returns number of occurrences of 'yeah'
 */
const numYeahs = (lyrics) => lyrics.reduce((count, line) => count + (line.toLowerCase().match(/yeah/g) || []).length, 0);
/**
 * Checks if the pronoun 'I' appears as a standalone word.
 * @param lyrics - Array of strings
 * @returns true if 'I' appears alone, false otherwise
 */
const hasStandaloneI = (lyrics) => lyrics.some((line) => /\bI\b/.test(line));
/**
 * Counts occurrences of 'I' as a standalone word.
 * @param lyrics - Array of strings
 * @returns number of occurrences of 'I'
 */
const numStandaloneIs = (lyrics) => lyrics.reduce((count, line) => count + (line.match(/\bI\b/g) || []).length, 0);
// Test cases
console.log(hasYeah(bieberBaby)); // prints true because “baby” in the array
console.log(hasYeah(bieberBaby.slice(0, 4))); // prints false because first 4 lines do not have “baby”
console.log(numYeahs(bieberBaby)); // prints true because “baby” in the array
console.log(numYeahs(bieberBaby.slice(0, 4))); // prints false because first 4 lines do not have “baby”
