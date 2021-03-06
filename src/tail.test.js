const tail = require('./tail.js');
test("tail fn return [2,3] if input is [1,2,3]",() => {
    expect(tail([ 1,2,3 ])).toEqual([ 2,3 ]);
});

test("tail fn return [] if input is []",() => {
    expect(tail([])).toEqual([])
});