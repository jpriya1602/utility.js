const filter = require("./filter.js");
test("filter([],x => true should give []",() => {
    expect(filter([],x => true,[])).toEqual([]);
} );

test("filter([1,2,3],x => true should give [1,2,3]",() => {
    expect(filter([1,2,3],x => true,[])).toEqual([1,2,3]);
} );

test("filter([1,2,3],x => false should give []",() => {
    expect(filter([1,2,3],x => false,[])).toEqual([]);
} );

test("filter([1,2,3],x => x > 1 give [2,3]",() => {
    expect(filter([1,2,3],x => x>1,[])).toEqual([2,3]);
} );
test("filter(['a','B','c','D'], filterUpperCase) should be [B,D]",() => {
    expect(filter(['a','B','c','D'],x => x.charCodeAt() < 97,[])).toEqual(['B','D']);
} );