function sum() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

sum(5, 10, 15);

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
    if (val <= 0 || isNaN(val) === true || typeof val != "string") {
        console.log("Error");
    } else if (val >= 1000000) {
        console.log(val);
    } else {
        calculate(val * 10);
    }
}

calculate(5);
