const { dbl } = require("./dbl");

test("passing NaN to dbl returns bad number!", () => {
    return dbl("layla").catch((err) => {
        expect(err).toBe("bad number!");
    });
});
