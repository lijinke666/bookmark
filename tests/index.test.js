const path = require("path");
const assert = require('assert')
const coffee = require("coffee");
const { version } = require("../package.json");

describe("bookmark Commands Tests", () => {
  describe("#Commands", () => {
    it(`should show version ${version}`, done => {
      coffee
        .fork(path.resolve(__dirname, "../bin/bookmark"), ["-v"])
        .expect("stdout", `${version}\n`)
        .expect("code", 0)
        .end(done);
    });
    it(`should show helper infos`, done => {
      coffee
        .fork(path.resolve(__dirname, "../bin/bookmark"), ["-h"])
        .expect("stdout", /^\n*\s*usage/i)
        .expect("code", 0)
        .end(done);
    });
  });
});
