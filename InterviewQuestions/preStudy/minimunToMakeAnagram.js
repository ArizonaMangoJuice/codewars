// Print a single integer denoting the number of characters you must delete to make the two strings anagrams of each other.
// Sample Input
// cde
// abc
// Sample Output
// 4
// Explanation
// We delete the following characters from our two strings to turn them into anagrams of each other:
// Remove d and e from cde to get c.
// Remove a and b from abc to get c.
// We must delete  characters to make both strings anagrams, so we print  on a new line.

let makeAnagram = (a, b) => {
  let freqs = {};
//  split into an array 
  a.split('')
//   loop through each character or sets default to 0 and increments by one
    .forEach(char => freqs[char] = (freqs[char] || 0) + 1); // increment
  b.split('')
    .forEach(char => freqs[char] = (freqs[char] || 0) - 1); // decrement
    // return the the sum of the freqs dictionary 
  return Object.keys(freqs)
    .reduce((sum, key) => sum + Math.abs(freqs[key]), 0);

}

// it should return 4
console.log(makeAnagram('cde','abc'))