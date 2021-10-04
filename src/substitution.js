// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  function allCharactersUniqueIn(input) {
    const inputArray = input.split("");
    for (let character of inputArray) { 
      const occurences = inputArray.filter(
        (selectedCharacter) => selectedCharacter === character
      );
      if (occurences.length > 1) return false;
    }
    return true;
  }

  function substitution(input, alphabet, encode = true) {
    //check validity of arguments
    if (!input || !alphabet) return false;
    if (alphabet.length !== 26) return false;
    if (!allCharactersUniqueIn(alphabet)) return false;
    input = input.toLowerCase();
    let result = "";
    if (encode) {
      const cipherMap = standardAlphabet.reduce((accum, letter, index) => {
        accum[letter] = alphabet[index];
        return accum;
      }, {});

      for (let character of input) {
        if (character === " ") {
          result += " ";
          continue;
        }
        result += cipherMap[character];
      }
    } else {
      const cipherMap = alphabet.split("").reduce((accum, letter, index) => {
        accum[letter] = standardAlphabet[index];
        return accum;
      }, {});
      for (let character of input) {
        if (character === " ") {
          result += " ";
          continue;
        }
        result += cipherMap[character];
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
