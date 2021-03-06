const head = require('./head.js');
test("return 1 if array is [1,2,3]",() => {
    expect(head([1,2,3])).toBe(1);
});
test("return null if array is []",() => {
    expect(head([])).toBe(null);
});