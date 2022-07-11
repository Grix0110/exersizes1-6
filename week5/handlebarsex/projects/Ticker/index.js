(function () {
    var ticker = document.getElementById("headlines");
    var left = ticker.offsetLeft;
    var links = document.getElementsByTagName("a");
    var animId;

    function moveHead() {
        left--;

        if (left <= -links[0].offsetWidth) {
            left += links[0].offsetWidth;
            ticker.appendChild(links[0]);
        }

        ticker.style.left = left + "px";

        animId = requestAnimationFrame(moveHead);
        
    }
    moveHead();

    document
        .getElementById("ticker")
        .addEventListener("mouseenter", function () {
            console.log("mouse enters");
            cancelAnimationFrame(animId);
            console.log(animId);
        });

    document
        .getElementById("ticker")
        .addEventListener("mouseleave", function () {
            console.log(animId);
            requestAnimationFrame(moveHead);
        });
})();
