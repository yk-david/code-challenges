/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

/*Plan
Initialize `newSentence` as empty string.
Check if `sentence` ends with `!`.
    - if yes, 
        slice `sentence` before `!`
        concatnate: `shh... ${sentence}`
    - if no, 
        concatenate: `shh... ${sentence}`
Make `newSentence` lower string and return
 */

function whisper(sentence) {
  const newSentence = `shh... ${sentence}`.toLowerCase();

  return sentence.endsWith("!") ? newSentence.slice(0, -1) : newSentence;
}

console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));

/*Retrospective
Things are gone a little differently from as planned. 

Initialize `newSentence` quasi ready to be return with prefix word "shh..." and `toLowerCase()`.
In returning the value of ternary operator, code gets much simpler and easy to read.
*/
