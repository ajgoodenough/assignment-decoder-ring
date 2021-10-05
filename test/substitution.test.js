const expect = require("chai").expect;
const substitution = require("../src/substitution");

describe("substitution()", () => {
  describe("encoding", () => {
    it("should encode a message by using the given alphabet value", () => {
      const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
      const expected = "jrufscpw";

      expect(actual).to.equal(expected);
    });

    it("should return false if function is called without providing input or alphabet arguments", () => {
      expect(substitution()).to.be.false;
    });

    it("should return false if alphabet is not exactly 26 characters long", () => {
      expect(substitution("thinkful", "abcd")).to.be.false;
    });

    it("should return false if there are any duplicate characters in substitution alphabet", () => {
      expect(substitution("thinkful", "xoyxmcgruksxaflnthdjpzibev")).to.be.false;
    });

    it("should maintain spaces", () => {
      const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
      const expected = "elp xhm xf mbymwwmfj dne";

      expect(actual).to.equal(expected);
    });

    it("should work with a substitution alphabet containing special characters", () => {
      const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
      const expected = "y&ii$r&";

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
      const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
      const expected = "thinkful";

      expect(actual).to.equal(expected);
    });

    it("should work with any key with unique characters", () => {
      const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });

    it("should maintain spaces", () => {
      const actual = substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false);
      const expected = "you are an excellent spy";

      expect(actual).to.equal(expected);
    });
  });
});