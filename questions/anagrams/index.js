/** Given two strings, find out if they are anagrams of each other.
 * Two strings are anagrams if they both use the exact same characters
 * the same number of times. Spaces are not to be considered as characters.
 * Capital letters are to be considered the same as lower case letters.
 *
 * @example
 * anagrams('save', 'vase') === true
 * anagrams('C A T', 'act') === true
 * anagrams('frontend', 'simplified') === false
 */

const anagrams = (strA, strB) => {


// Top Tech Solution
  return cleanString(strA) === cleanString(strB);
}

  const cleanString = (str) => {
    return str.toLowerCase().replaceAll(" ", "").split("").sort().join("");
};

// Beginner Solution

//   const charMapA = buildCharMap(strA)
//   const charMapB = buildCharMap(strB)

//   if (charMapA.size !== charMapB.size){
//     return false
//   }

//   for (const [charA, countA] of charMapA){
//     if (charMapB.get(charA) !== countA){
//         return false
//     }
//   }
//   return true
// };

// const buildCharMap = (str) => {

// const charMap = new Map ();
//   for (const char of removeSpacesandLowerCase(str)) {
//     charMap.set(char, charMap.get(char) + 1 || 1);
//   }
//   return charMap
// };

// const removeSpacesandLowerCase = (str) => {
//   return str.toLowerCase().replaceAll(" ", "");
// }


module.exports = anagrams;
