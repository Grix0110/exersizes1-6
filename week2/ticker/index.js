(function () {
    var ticker = document.getElementById("headlines");
    var left = ticker.offsetLeft;
    var links = document.getElementsByTagName("a");
    // var animId;
    // var stopId;

    function moveHead() {
        left--;

        if (left <= -links[0].offsetWidth) {
            left += links[0].offsetWidth;
            ticker.appendChild(links[0]);

            console.log("whatever");
        }

        ticker.style.left = left + "px";

        requestAnimationFrame(moveHead);

        // cancelAnimationFrame(moveHead);

        // ticker.addeventListener("mouseenter", function (e) {
        //     console.log("ENTER");
        //     e.stopId;
        // });

        // ticker.addeventListener("mouseleave", function (e) {
        //     console.log("LEAVE");
        //     e.animId;
        // });
    }
    moveHead();
})();
