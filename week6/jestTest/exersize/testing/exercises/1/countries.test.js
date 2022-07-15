const { find } = require("./countries");

test("when find is passed an empty string it returns an empty array", () => {
    const result = find(" ");
    expect(result).toEqual([]);
});

test("that the lenght of the returned array equals to 4 or less", () => {
    const result = find("a");
    expect(result.length).toBeLessThanOrEqual(4);
});

test("no matter the case typed in its always the same result", () => {
    const result = find("A");
    const result2 = find("a");
    expect(result).toEqual(result2);
});

test("If the input doesnt find any matches return an empty array", () => {
    const result = find("101");
    expect(result).toEqual([]);
});