const reduce = require("./reduce.js");
test("reduce([],(x,y)=>x+y) should be undefined", () => {
    expect(reduce([],(x,y)=>x+y)).toBe(undefined);
});
test("reduce([],(x,y)=>x+y,10) should be undefined", () => {
    expect(reduce([],(x,y)=>x+y,10)).toBe(10);
});
test("reduce(['a','b','c'],(x,y)=>x+y) should be abc", () => {
    expect(reduce(['a','b','c'],(x,y)=>x+y)).toEqual('abc');
});


test("reduce(['a','b','c'],(x,y)=>x+y,z) should be zabc", () => {
    expect(reduce(['a','b','c'],(x,y)=>x+y,'z')).toEqual('zabc');
});

test("reduce([1,2,3],(x,y)=>x+y,10) should be 16", () => {
    expect(reduce([1,2,3],(x,y)=>x+y,10)).toEqual(16);
});

