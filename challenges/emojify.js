/*  Emojify!

Popular services like Slack and Github allow for emoji shortscodes, meaning 
they will detect when a word in a sentence begins and ends with a colon (:)
and automatically replace that word with an emoji. 

These shortcodes allow users to add an emoji to their messages by typing a 
code rather than searching for an emoji from a list. 

For example, typing :smile: will replace that text with 😊 

*/

const emojis = {
  smile: "😊",
  angry: "😠",
  party: "🎉",
  heart: "💜",
  cat: "🐱",
  dog: "🐕",
};

/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, remove the colons and
look up the word in the emoji object. If the word is in the 
emojis object, return the corresponding emoji.
If it isn't, return the original word.

Example input: ":party:"
Example output: 🎉

Example input: ":flower:"
Example output: "flower"

Example input: "elephant"
Example output: "elephant"
*/

/*Plan
Check if `word` starts with and ends with ":"
    - If yes, 
        - Loop over `emojis` array, 
            - If `word` is in, return the word matching emoji.
            - Else, return `word` as it is.
    - Else, return `word` as it is.
 */

function emojifyWord(word) {
  if (word.startsWith(":") && word.endsWith(":")) {
    const wordWithoutColon = word.slice(1, -1);
    return Object.keys(emojis).includes(wordWithoutColon)
      ? emojis[wordWithoutColon]
      : wordWithoutColon;
  }

  return word;
}

/* 2. Write a function to find any emoji shortcodes in a phrase.
Your function should map over each word in the phrase, emojify any word
that begins and ends with a colon, then return the emojified phrase. 
Feel free to use your emojify function from the previous exercise!

Example input: "I :heart: my :cat:"
Example output: "I 💜 my 🐱"

Example input: "I :heart: my elephant"
Example output: "I 💜 my elephant"
*/

/*Plan
Split `phrase` into words.
Loop over the array of words.
    - Run `emojifyWord` on each word
    - Push words and emojified words into a new array
- Join words of the new array into phrase and return.
 */

function emojifyPhrase(phrase) {
  return phrase
    .split(" ")
    .map((word) => emojifyWord(word))
    .join(" ");
}

console.log(emojifyWord(":heart:"));
console.log(emojifyWord(":flower:"));
console.log(emojifyWord("elephant"));

console.log(emojifyPhrase("I :heart: my :cat:"));
console.log(emojifyPhrase("I :heart: my :elephant:"));

/*Retrospective
While step 2 with `emojifyPhrase` worked as planned, I had to take a different approah in step 1 for creating `emojifyWord`. 
Here's the original approah that failed:

function emojifyWord(word) {
    if (word.startsWith(":") && word.endsWith(":")) {
        for (const key of Object.keys(emojis)) {
            if (key === word.slice(1, -1)) {
                return emojis[key];
            } else {
                return word;
            }
        }
    }
    
    return word;
}
 */
