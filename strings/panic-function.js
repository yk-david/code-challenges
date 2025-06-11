/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
*/

/* Plan
1. Check out if returnning sentence is one word or more.
2. If sentence is just one word,
  - capitalize sentence
  - add "!"
3. Else if sentence is more than one word,
  - capitalize sentence
  - add "!"
  - split sentence in word
  - push splited word into an empty array
  - then join the array on "😱" 
*/

function panic(sentence) {
    let capitalizedSentence = capitalizeSentence(sentence);
    let splitedWords = [];
    let joinedWordsWithScrim = "";
    
    if (capitalizedSentence.split(" ").length > 1) {
        capitalizedSentence.split(" ").forEach(word => splitedWords.push(word));
        joinedWordsWithScrim = splitedWords.join(" 😱 ");
    } 
    
    if (joinedWordsWithScrim) {
        return addExclamationPointToSentence(joinedWordsWithScrim);
    } else {
        return addExclamationPointToSentence(capitalizedSentence);
    }
}

function capitalizeSentence(sentence) {
    return sentence.toUpperCase();
}

function addExclamationPointToSentence(sentence) {
    return `${sentence}!`;
}

// Test the function
console.log(panic("I'm almost out of coffee")); 
console.log(panic("winter is coming"));
console.log(panic("apple"));