const { increase } = require("./index");

test("increase returns ERROR when passed a NaN", () => {
    const result = increase(NaN);
    expect(result).toBe("ERROR");
});

test("passing 0 to increase returns ERROR", () => {
    const result = increase(0);
    expect(result).toBe("ERROR");
});

test("passing number less than 0 returns ERROR", () => {
    const result = increase(-10);
    expect(result).toBe("ERROR");
});

test("passing number greater than 0 returns that number multiplied by 10 UNTIL it reaches at least 1M", () => {
    const result = increase(5);
    expect(result).toBe(5000000);
});

test("passing number greater than 1M returns that number", () => {
    const result = increase(8000000);
    expect(result).toBe(8000000);
});
