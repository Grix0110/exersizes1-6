(function () {
    var ticker = $("#headlines");
    var left = ticker.offset().left;
    var links = $("a");
    var animId;

    function moveHead() {
        animId = requestAnimationFrame(moveHead);

        left--;

        if (left <= -links.eq(0).outerWidth()) {
            left += links.eq(0).outerWidth();
            links.eq(0).appendTo(ticker);
            links = $("a");
        }
        ticker.css({ left: left + "px" });
    }

    moveHead();

    $("#headlines")
        .on("mouseenter", function () {
            cancelAnimationFrame(animId);
        })
        .on("mouseleave", function () {
            requestAnimationFrame(moveHead);
        });
})();
