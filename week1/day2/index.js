// Empty Types
/*
var a = undefined;

var b = null;

// Strings

var message = "Hello World!";
var otherMessage = "Other Message";

var dialog = 'he said: "whats up?"';

// Numbers

var myLuckyNumber = 33;

var myOtherLuckyNumber = 3.33;

console.log("MAX SAFE INTEGER", Number.MAX_SAFE_INTEGER);

// Boolean

var myFirstBoolean = true;

var mySecondBoolean = false;

// Objects

var cohort = {
    name: "Buckwheat",
    year: 2022,
    onsite: true,
};


function func() {
    console.log("anything");
}

func();

console.log("boolean: ", Boolean(0));

// typeof gives you the type of your value, with the following quirks;
// typeof null gives "object" (use a===null instead)
//typeof [] gives "object" (if you want to be more precise use Array.isArray())
// typeof function() gives you "function"
// typeof NaN gives "number" (if you want to be morte precise use Number.isNaN)
*/

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