/*  
Grandpa's hand isn't as steady as it used to be. You finally convinced him
to start using a password manager, but he accidentally typed and saved his
password with a bunch of extra characters. Help him recover his password by 
removing all the duplicate characters. 

Your function should take in a string of characters and return a
string with the duplicate characters removed. Assume that your input
is lowercased with only letters and numbers.  

Example input: "aabbccb1212"
Example output: "abc12"
*/

/*Plan
Convert `chars` into array.
Initialize a new variable for creating Set: As set is an array that contains unique value, it will eliminate any duplicate.
Join the set to make the whole string and return.
 */

const password = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23";

function removeDupeChars(chars) {
  const uniqueCharsSet = new Set(chars);

  return [...uniqueCharsSet].join("");
}

console.log(removeDupeChars(password));

/*Retrospective
Knowing Set was the key in solving this challenge. However, once duplicates eliminated within Set, bringing out Set element back to array didn't work as expected at first. Passing set in `Array()` didn't make it an array. So I ran spread operator on set inside an array, which resolved to expected output.
 */
