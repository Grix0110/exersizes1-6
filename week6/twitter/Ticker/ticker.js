(function () {
    // AJAX Request //
    $.ajax({
        url: "/ticker",
        method: "GET",
        success: function (data) {
            createLink(data);
            console.log(data);
        },
    });
    
    function createLink(data) {
        var html = "";
        for (var jason of data) {
            html += '<a href="' + jason.url + '">' + jason.headline + "</a>";
        }
        $("#headlines").html(html);
        moveHead();
    }

    var ticker = $("#headlines");
    var left = ticker.offset().left;
    var animId;
    
    function moveHead() {
        var links = $("a");
        animId = requestAnimationFrame(moveHead);

        left-=3;

        if (left <= -links.eq(0).outerWidth()) {
            left += links.eq(0).outerWidth();
            links.eq(0).appendTo(ticker);
            links = $("a");
        }
        ticker.css({ left: left + "px" });
    }

    // moveHead();

    $("#headlines")
        .on("mouseenter", function () {
            cancelAnimationFrame(animId);
        })
        .on("mouseleave", function () {
            requestAnimationFrame(moveHead);
        });
})();
