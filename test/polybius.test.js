const expect = require("chai").expect;
const {polybius} = require("../src/polybius");

describe("polybius()", () => {
  describe("encoding a message", () => {
    it("should encode a message if given an input string with only letters and spaces", () => {
      const actual = polybius("polybius");
      const expected = "5343134521425434";
      expect(actual).to.be.equal(expected);
    });

    it("should ignore capital letters", () => {
        const withCapitals = polybius("POLYbius");
        const withoutCapitals = polybius("polybius");
        expect(withCapitals).to.be.equal(withoutCapitals);
      });

    it("should translate i or j to 42 when encoding", () => {
      const actual = polybius("justice league");
      const expected = "42543444423151 135111225451";
      expect(actual).to.be.equal(expected);
    });

    it("should return false if input contains characters other than letters and spaces", () => {
      const actual = polybius("Hey, that's my ice cream!");
      expect(actual).to.be.false;
    });

    it("should leave spaces intact", () => {
      const actual = polybius("I want you to be happier");
      const expected = "42 25113344 454354 4443 2151 32115353425124";
      expect(actual).to.be.equal(expected);
    });

    it("should return false if no input is passed in", () => {
      expect(polybius()).to.be.false;
    });
  });

  describe("decoding a message", () => {
    it("should decode a message, translating each pair of numbers to a letter", () => {
      const actual = polybius("5343134521425434", false);
      const expected = "polyb(i/j)us";
      expect(actual).to.be.equal(expected);
    });

    it("should return false if length of numbers is odd after subtracting the spaces", () => {
      const actual = polybius("534313452142543", false);
      expect(actual).to.be.false;
    });

    it("should leave spaces intact", () => {
      const actual = polybius("42 25113344 454354 4443 2151 32115353425124", false);
      const expected = "(i/j) want you to be happ(i/j)er";
      expect(actual).to.be.equal(expected);
    });

    it("should somehow show both letters, i and j, when decoding", () => {
      const actual = polybius("5343134521425434", false);
      const expected = "polyb(i/j)us";
      expect(actual).to.be.equal(expected);
    });
  });
});
