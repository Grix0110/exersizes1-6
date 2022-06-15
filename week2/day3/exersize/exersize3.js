var box = document.getElementById("box");

box.addEventListener("mousedown", function () {
    console.log("BOX CLICKED");

    var randomNumber = Math.floor(Math.random() * 360);
    console.log("randomNumber", randomNumber);

    var color = "hsl(" + randomNumber + ", 70%, 70%)";
    console.log("color", color);

    box.style.backgroundColor = color;
});

box.addEventListener("mouseup", function () {
    console.log("BOX LEFT");

    var randomNumber = Math.floor(Math.random() * 360);
    console.log("randomNumber", randomNumber);

    var color = "hsl(" + randomNumber + ", 70%, 70%)";
    console.log("color", color);

    box.style.backgroundColor = color;
});
