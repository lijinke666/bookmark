const path = require('path');
const coffee = require('coffee');
const { version } = require('../package.json');
const bookmark = path.resolve(__dirname, '../bin/bookmark');

describe('bookmark Commands Tests', () => {
  describe('#Commands', () => {
    it(`should show version ${version}`, done => {
      coffee
        .fork(bookmark, ['-v'])
        .expect('stdout', `${version}\n`)
        .expect('code', 0)
        .end(done);
    });
    it(`should show helper infos`, done => {
      coffee
        .fork(bookmark, ['-h'])
        .expect('stdout', /^\n*\s*usage/i)
        .expect('code', 0)
        .end(done);
    });
  });
  describe('# bookmark',() => {
    it(`shout generator index.html`, (done) => {
      coffee
        .fork(bookmark)
        .expect('code', 0)
        .expect('stdout', /index\.html/i)
        .end(done);

    });

    it(`shout generator custom output file`, (done) => {
      coffee
        .fork(bookmark,['-o test.html'])
        .expect('code', 0)
        .expect('stdout', /test\.html/i)
        .end(done);

    });

    it(`shout generator custom public path`, (done) => {
      coffee
        .fork(bookmark,['-p /public'])
        .expect('code', 0)
        .expect('stdout', /\/public/i)
        .end(done);
    });
  });
});
