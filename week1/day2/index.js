function logType(value) {
    let val = typeof value;
    if (typeof value == "undefined") {
        console.log("undefined!");
    } else if (value === null) {
        console.log("null!");
    } else if (val == "number" && isNaN(value) == false) {
        console.log("number!");
    } else if (val == "number" && isNaN(value) == true) {
        console.log("not a number!");
    } else if (val == "string") {
        console.log("string!");
    } else if (val == "boolean") {
        console.log("boolean!");
    } else if (val == "bigint") {
        console.log("bigint");
    } else if (val == "function") {
        console.log("function!");
    } else if (
        val == "object" &&
        value !== null &&
        Array.isArray(value) == false
    ) {
        console.log("object!");
    } else if (Array.isArray(value)) {
        console.log("array!");
    } else {
        console.log("i have no idea!");
    }
}

logType();
logType(null);
logType(12);
logType(NaN);
logType("something");
logType(true);
logType(1234567894567899876543n);
logType(function () {});
logType({});
logType([]);
logType();

var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};

var b = {};

for (var key in a) {
    b[a[key]] = key;
}

console.log(b);

for (var i = 10; i > -1; i--) {
    console.log(i);
}
