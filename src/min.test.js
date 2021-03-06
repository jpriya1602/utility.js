const min = require('./min.js');
test("min([1,2,3,4]) should be 1",() => {
    expect(min([1,2,3,4])).toBe(1);
});