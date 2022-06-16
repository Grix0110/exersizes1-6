var box = document.getElementsByClassName("box");

var button = document.getElementById("button");

button.addEventListener("click", function (e) {
    console.log(e);
    box.classList.add("move-to-right");
});

