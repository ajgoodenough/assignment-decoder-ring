// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function getShiftedCharacter(character, shift) {
    const codeForA = "a".charCodeAt(0);
    const codeForZ = "z".charCodeAt(0);
    const characterCode = character.charCodeAt(0);
    let shiftedCharacterCode = characterCode + shift;

    if (shiftedCharacterCode < codeForA) {
      shiftedCharacterCode += 26;
    } else if (shiftedCharacterCode > codeForZ) {
      shiftedCharacterCode -= 26;
    }
    return String.fromCharCode(shiftedCharacterCode);
  }

  function caesar(input, shift, encode = true) {
    //if statements if shift is not present, equal to 0, less than 25, more than -25

    if (!shift || shift === 0 || shift > 25 || shift < -25) return false;

    //turn input to toLowerCase
    let result = input.toLowerCase().split("");

    //if statement if letter wraps around alphabet
    if (encode) {
      result = result.map((character) => {
        //if statement if char(space or special character) is not between set parameter
        if (!character.match(/[a-z]/)) return character;
        //for each loop to add shift to letters
        return getShiftedCharacter(character, shift);
      });
      //convert back to string with .fromCharCode
    } else {
      result = result.map((character) => {
        if (!character.match(/[a-z]/)) return character;
        //for each loop to add shift to letters
        return getShiftedCharacter(character, shift * -1);
      });
    }
    result = result.join("");
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
