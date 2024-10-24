const hello = require('./hello');

it('hello is defined', () => {
  expect(hello()).toBeDefined()
})

test('hello is defined', () => {
  expect(hello()).toBeDefined()
})

test('outputs the correct string', () => {
  expect(hello()).toBe("Hello world!");
});
