const max = require('./max.js');
test("max([1,2,3,4]) should be 4",() => {
    expect(max([1,2,3,4])).toBe(4);
});