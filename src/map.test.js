const map = require("./map.js");
test("map([],cube) should give []",() => {
    expect(map([],x => x*x*x,[])).toEqual([]);
});
test("map([1,2,3],identity) should give [1,2,3]",() => {
    expect(map([1,2,3],x => x,[])).toEqual([1,2,3]);
});
test("map([1,2,3],cube) should give [1,2,3]",() => {
    expect(map([1,2,3],x => x*x*x,[])).toEqual([1,8,27]);
});
test("map([{x:10}],obj = obj.x+1) should give [11]",() => {
    expect(map([{x:10}],obj => obj.x+1,[])).toEqual([11]);
});