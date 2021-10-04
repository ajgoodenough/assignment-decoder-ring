// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const grid = {
    11: "a",
    12: "f",
    13: "l",
    14: "q",
    15: "v",
    21: "b",
    22: "g",
    23: "m",
    24: "r",
    25: "w",
    31: "c",
    32: "h",
    33: "n",
    34: "s",
    35: "x",
    41: "d",
    42: "ij",
    43: "o",
    44: "t",
    45: "y",
    51: "e",
    52: "k",
    53: "p",
    54: "u",
    55: "z",
  };

  function polybius(input, encode = true) {
    if (!input) 
      return false;
    let result = "";
    if (encode) {
      input = input.toLowerCase();
      // if input string contains any characters that are not letters or spaces, then return false.
      const nonAlphabeticOrSpaceChars = input.match(/[^(a-z) ]/g);
      if (nonAlphabeticOrSpaceChars) 
        return false;
      const keys = Object.keys(grid);
      const values = Object.values(grid);

      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          result += " ";
          continue;
        }
        if (input[i] === "i" || input[i] === "j") {
          const index = values.findIndex((value) => value === "ij");
          result += keys[index];
          continue;
        }
        const index = values.findIndex((value) => value === input[i]);
        result += keys[index];
        console.log(result);
      }
    } else {
      //check if input length is even w/o spaces
      let length = input.length;
      const spaces = input.match(/ /g);
      if (spaces) {
        length -= spaces.length;
      }
      if (length % 2 !== 0) {
        return false;
      }
      for (let i = 0; i < input.length; ) {
        if (input[i] === " ") {
          result += " ";
          i++;
          continue;
        }
        const coordinates = input.slice(i, i + 2);

        if (coordinates === "42") {
          result += "(i/j)";
          i += 2;
          continue;
        }
        result += grid[coordinates];
        i += 2;
      }
    }
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
