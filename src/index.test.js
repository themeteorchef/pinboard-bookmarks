const Pinboard = require('./index.js');

test('throws an error if no API key is passed', () => {
  expect(() => {
    const pinboard = new Pinboard();
  }).toThrow();
});

test('returns an instance of the wrapper if an API key is passed', () => {
  const pinboard = new Pinboard('1234');
  expect(typeof pinboard).toBe('object');
});

test('wrapper has a bookmarks method defined', () => {
  const pinboard = new Pinboard('1234');
  expect(typeof pinboard.bookmarks).toBe('function');
});
