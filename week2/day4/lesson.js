(function () {
    var canvas = document.getElementById("canvas");

    var context = canvas.getContext("2d");

    context.beginPath();

    context.strokeStyle = "red";
    context.lineWidth = 5;

    context.moveTo(150, 150);

    context.lineTo(450, 150);
    context.lineTo(300, 450);
    context.lineTo(150, 150);

    context.closePath();

    context.stroke();

    context.fillStyle = "blue";
    context.fill();

    context.strokeStyle = "hotpink";
    context.lineWidth = 5;

    context.beginPath();

    context.arc(300, 300, 50, 0, 2 * Math.PI);

    context.closePath();

    context.stroke();

    context.fillStyle = "yellow";
    context.fill();

    // context.fillRect(50, 400, 20, 200);

    // context.clearRect(0, 0, canvas.width, canvas.height);


})();
