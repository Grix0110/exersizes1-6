var inner = document.getElementById("innerBox");
var outer = document.getElementById("outerBox");

outer.addEventListener("click", function () {
    console.log("OUTER CLICKED");

    var randomNumber = Math.floor(Math.random() * 360);
    console.log("randomNumber", randomNumber);

    var color = "hsl(" + randomNumber + ", 70%, 70%)";
    console.log("color", color);

    outer.style.backgroundColor = color;
});

inner.addEventListener("click", function (e) {
    console.log("INNER CLICKED");
    e.stopPropagation();
    var randomNumber = Math.floor(Math.random() * 360);
    console.log("randomNumber", randomNumber);

    var color = "hsl(" + randomNumber + ", 70%, 70%)";
    console.log("color", color);

    inner.style.backgroundColor = color;
});
