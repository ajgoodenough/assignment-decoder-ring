const expect = require("chai").expect;
const polybius = require("../src/polybius");

describe("polybius()", () => {
  describe("encoding a message", () => {
    it("should encode a message if given an input string with only letters and spaces", () => {
      const actual = polybius("thinkful");
      const expected = "4432423352125413";
      expect(actual).to.be.equal(expected);
    });

    it("should ignore capital letters", () => {
        const withCapitals = polybius("THINKful");
        const withoutCapitals = polybius("thinkful");
        expect(withCapitals).to.be.equal(withoutCapitals);
      });

    it("should translate i or j to 42 when encoding", () => {
      const actual = polybius("projection");
      const expected = "53244342513144424333";
      expect(actual).to.be.equal(expected);
    });

    it("should return false if input contains characters other than letters and spaces", () => {
      const actual = polybius("Hello, Bob.");
      expect(actual).to.be.false;
    });

    it("should leave spaces intact", () => {
      const actual = polybius("hi there");
      const expected = "3242 4432512451";
      expect(actual).to.be.equal(expected);
    });

    it("should return false if no input is passed in", () => {
      expect(polybius()).to.be.false;
    });
  });

  describe("decoding a message", () => {
    it("should decode a message, translating each pair of numbers to a letter", () => {
      const actual = polybius("4432423352125413", false);
      const expected = "th(i/j)nkful";
      expect(actual).to.be.equal(expected);
    });

    it("should return false if length of numbers is odd after subtracting the spaces", () => {
      const actual = polybius("4432 42335212541", false);
      expect(actual).to.be.false;
    });

    it("should leave spaces intact", () => {
      const actual = polybius("3251131343 214321", false);
      const expected = "hello bob";
      expect(actual).to.be.equal(expected);
    });

    it("should somehow show both letters, i and j, when decoding", () => {
      const actual = polybius("5343134521425434", false);
      const expected = "polyb(i/j)us";
      expect(actual).to.be.equal(expected);
    });
  });
});