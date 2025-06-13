/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

/*Plan
Initialize `newStr` as empty string.
Supposing all sentences start with a capital letter, make `str` to uppercase at start point.
Using `for` loop, iterate over string.
    - Basically, concatnate every `letter` of string to `newStr`.
    - If index of a letter falls in odd number (zero index), make that letter to lowercase.
Return `newStr`.
 */

function altCaps(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
    }
  }

  return newStr;
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));

/* Retrospective
I came up to realize that starting with a capitalized `str` wouldn't be that efficient, because I need an additional variable to store that. It may be a overkill for a function of this small size.
Then I ended up in alternatiing `toUpperCase` and `toLowerCase` depending on whether or not index is even.
 */
