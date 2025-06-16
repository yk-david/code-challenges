/* 

Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false

*/

/*Plan
Check if two strings input match the logic to be anagram.
    - equal length
    - make both strings in alphabetical order
If both conditions true, return true, else return false.
 */

function isAnagram(str1, str2) {
  const checkStringsLength = str1.length === str2.length;
  const checkStringsLetters = sortString(str1) === sortString(str2);

  return checkStringsLength && checkStringsLetters;
}

function sortString(str) {
  return str.split("").sort().join("");
}

console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("treasure", "measure"));

/*Retrospective
As processing strings get lengthy, I thought it would be nice to have some helper function with clear name for what it does. Likewise, I could manage main function `isAnagram` clean and concise.
 */
