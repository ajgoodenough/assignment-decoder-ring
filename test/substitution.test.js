const expect = require("chai").expect;
const {substitution} = require("../src/substitution");

describe("substitution()", () => {
  describe("encoding", () => {
    it("should encode a message by using the given alphabet value", () => {
      const actual = substitution("substitution", "xoyqmcgrukswaflnthdjpzibev");
      const expected = "dpodjujpjulf";

      expect(actual).to.equal(expected);
    });

    it("should return false if function is called without providing input or alphabet arguments", () => {
      expect(substitution()).to.be.false;
    });

    it("should return false if alphabet is not exactly 26 characters long", () => {
      expect(substitution("substitution", "abc")).to.be.false;
    });

    it("should return false if there are any duplicate characters in substitution alphabet", () => {
      expect(substitution("substitution", "xxyqmcgrukswaflnthdjpzibev")).to.be.false;
    });

    it("should maintain spaces", () => {
      const actual = substitution("I want you to be happier", "xoyqmcgrukswaflnthdjpzibev");
      const expected = "u ixfj elp jl om rxnnumh";

      expect(actual).to.equal(expected);
    });

    it("should work with a substitution alphabet containing special characters", () => {
      const actual = substitution("analysis", "$wae&zrdxtfcygvuhbijnokmpl");
      const expected = "$g$cpixi";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const withCapitals = substitution("A Message", "$wae&zrdxtfcygvuhbijnokmpl");
      const withoutCapitals = substitution("a message", "$wae&zrdxtfcygvuhbijnokmpl");

      expect(withCapitals).to.equal(withoutCapitals);
    });
  });

  describe("decoding", () => {
    it("should decode a message by using the substitution alphabet", () => {
      const actual = substitution("dpodjujpjulf", "xoyqmcgrukswaflnthdjpzibev", false);
      const expected = "substitution";

      expect(actual).to.equal(expected);
    });

    it("should work with any key with unique characters", () => {
      const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });

    it("should maintain spaces", () => {
      const actual = substitution("u ixfj elp jl om rxnnumh", "xoyqmcgrukswaflnthdjpzibev", false);
      const expected = "i want you to be happier";

      expect(actual).to.equal(expected);
    });
  });
});
