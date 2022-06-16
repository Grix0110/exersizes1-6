/* eslint-disable indent */
(function () {
    var canvas = document.getElementById("canvas");

    var context = canvas.getContext("2d");

    var x = 300,
        y = 175,
        radius = 50,
        speed = 50;

    // Head
    function head() {
        context.beginPath();

        context.lineWidth = 5;
        context.strokeStyle = "grey";

        context.arc(x, y, radius, 0, 2 * Math.PI);

        context.stroke();

        context.fillStyle = "mistyrose";
        context.fill();
    }

    //MOUTH
    function mouth() {
        context.beginPath();

        context.lineWidth = 3;

        context.arc(x, y + 5, radius - 20, 0, 1 * Math.PI);

        context.stroke();
    }

    //EYE RIGHT
    function eyeR() {
        context.beginPath();

        context.arc(x - 15, y - 15, radius - 45, 0, 2 * Math.PI);

        context.stroke();

        context.fillStyle = "lightblue";
        context.fill();
    }

    //EYE LEFT
    function eyeL() {
        context.beginPath();

        context.arc(x + 15, y - 15, radius - 45, 0, 2 * Math.PI);

        context.stroke();

        context.fillStyle = "lightblue";
        context.fill();
    }

    //BODY
    function body() {
        context.beginPath();

        context.moveTo(x, y + 50);

        context.lineTo(x, y + 225);

        context.stroke();
    }

    //LEGS
    function legs() {
        context.beginPath();

        context.moveTo(x - 75, y + 325);

        context.lineTo(x, y + 225);
        context.lineTo(x + 75, y + 325);

        context.stroke();
    }

    //ARMS
    function arms() {
        context.beginPath();

        context.moveTo(x - 75, y + 50);

        context.lineTo(x, y + 125);
        context.lineTo(x + 75, y + 50);

        context.stroke();
    }

    // CLEAR CANVAS AND REDRAW IMAGE
    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        head();
        mouth();
        eyeR();
        eyeL();
        body();
        legs();
        arms();
        requestAnimationFrame(draw);
    }
    draw();

    //MOVE IMAGE WITH KEYS
    window.addEventListener("keydown", function (e) {
        switch (e.key) {
            case "ArrowUp":
                if (y > radius) y = y - speed;
                break;
            case "ArrowDown":
                if (y < canvas.height - 250) y += speed;
                break;
            case "ArrowLeft":
                if (x > radius) x -= speed;
                break;
            case "ArrowRight":
                if (x < canvas.width - radius) x += speed;
                break;
        }
    });
})();
