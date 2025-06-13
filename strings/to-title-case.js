/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

function capitalizeWord(word) {
  return `${word[0].toUpperCase()}${word.slice(1)}`;
}

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/

function toTitleCase(str) {
  return str
    .split(" ") // convert `str` into array
    .map((word) => capitalizeWord(word))
    .join(" "); // revert array into string
}

// Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));

/*Plan
For `capitalizeWord`, 
    - make first character of `word` to uppercase.
    - concatnate it to `word` slice from second letter to the end.
    - return the result.

For `toTitleCase`, 
    - with `map`, iterate on every word of `str`.
    - for each word, run `capitalizedWord`.
    - return the result.
 */

/*Retrospective
I could finish the challenge according to the plan. To split a complex function into smaller pieces with specific task seems crucial for me more than ever for modular code and reusability.
 */
