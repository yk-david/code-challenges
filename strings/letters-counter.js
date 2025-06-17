/* 
How often do the letters in your name repeat? 

Write a function that counts how many times each letter of your name
occurs. Your function should take in your first and last name and return
an object where the keys are each character in your name, and the value
is how many times that character appears in your name. 

Example input: "Peggy Porth"
Example output: {p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1}

Your function should NOT count spaces and should not be case sensitive (a
lowercase t and a capital T should be considered the same character).

*/

/*Plan
Initialize character counter object.
Iterate over `str` in lower string
    - If `char` isn't empty string, 
        If counter objects keys don't have char as key, add this key in the object with value of 1.
        Else if counter objects keys already have this key in them, increment this keys value by 1. 
Return counter object.
 */

function countChars(str) {
  const characterCounter = {};

  for (const char of str.toLowerCase()) {
    if (char !== " ") {
      if (!Object.keys(characterCounter).includes(char)) {
        characterCounter[char] = 1;
      } else {
        characterCounter[char] += 1;
      }
    }
  }

  return characterCounter;
}

console.log(countChars("Peggy Porth"));

/*Retrospective
Starting with lowercased str input and doing early check for empty space in condition ensured getting expected output. Both Object.keys and Array.includes methods were essential for solving the problem in a built-in way.
 */
