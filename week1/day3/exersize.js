// var cohort;
/*function updateCohortName(name) {
    var cohort = name;
    console.log("cohort:", cohort);
}
updateCohortName("buckwheat");

function logRandomEmoji(emojiArr) {
    return emojiArr[Math.floor(Math.random() * 4)];
}

var randomEmoji = logRandomEmoji(["🦔", "🐡", "🦙", "🦩", "🐿"]);
console.log("randomEmoji:", randomEmoji);

*/

// setTimeout(waitThenRun, 1500);

// function waitThenRun() {
//     setTimeout(function () {
//         console.log("Hello");
//     }, 1500);
//     setTimeout(function () {
//         console.log("Good Bye");
//     }, 3000);
// }

// waitThenRun();

function sum() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

console.log(sum(5, 10, 15));

let say = "init";

function waitThenRun(callback) {
    setTimeout(() => {
        say = "updatedWord";
        callback();
    }, 1500);
}

waitThenRun(function () {
    console.log("Hello!");
    waitThenRun(function () {
        console.log("Goodbye!");
    });
});

function calculate(val) {
    if (val <= 0 || isNaN(val) === true || typeof val != "number") {
        return "Error";
    } else if (val >= 1000000) {
        return val;
    } else {
        return calculate(val * 10);
    }
}

console.log(calculate(2));
