const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar()", () => {
  it("should return an encoded string if correct input given", () => {
    const input = "Woohoo! This actually works!";
    const shift = 3;
    const actual = caesar(input, shift);
    const expected = "zrrkrr! wklv dfwxdoob zrunv!";

    expect(actual).to.be.equal(expected);
  });

  it("should return a decoded string if correct input given", () => {
    const input = "zrrkrr! wklv dfwxdoob zrunv!";
    const shift = 3;
    const actual = caesar(input, shift, false);
    const expected = "Woohoo! This actually works!";

    expect(actual).to.be.equal(expected);
  });

  it("should maintain spaces and any other non-alphabetic symbols", () => {
    const input = "Hello, World.";
    const shift = -8;
    const actual = caesar(input, shift);
    const expected = "zwddg, ogjdv.";

    expect(actual).to.be.equal(expected);
  });

  it("should ignore capital letters", () => {
    const input = "HeLlO wOrLd.";
    const shift = 4;
    const actual = caesar(input, shift);
    const expected = "lipps asvph.";

    expect(actual).to.be.equal(expected);
  });

  it("should return false if shift value not given", () => {
    const input = "something simple";
    const actual = caesar(input);

    expect(actual).to.be.false;
  });
  
  it("should return false if shift equals 0", () => {
    const input = "something simple";
    const actual = caesar(input, 0);

    expect(actual).to.be.false;
  });
  
  it("should return false if shift is greater than 25", () => {
    const input = "something simple";
    const actual = caesar(input, 30);

    expect(actual).to.be.false;
  });

  it("should return false if shit is less than -25", () => {
    const input = "something simple";
    const actual = caesar(input, -30);

    expect(actual).to.be.false;
  });

  it("should wrap around to end of alphabet when shift goes past beginning of alphabet", () => {
    const actual = caesar("amazon", -7);
    const expected = "tftshg";
      
    expect(actual).to.equal(expected);
  });

  it("should wrap around to beginning of alphabet when shift goes past end of alphabet", () => {
    const actual = caesar("yellow", 9);
    const expected = "hnuuxf";
    
    expect(actual).to.equal(expected);
  });
});
