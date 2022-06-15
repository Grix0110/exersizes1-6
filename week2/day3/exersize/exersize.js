var box = document.getElementById("box");

document.body.addEventListener("mousemove", function mouseMove(e) {
    console.log("MOUSE MOVED");

    box.style.left = e.pageX + "px";
    box.style.top = e.pageY + "px";
});
