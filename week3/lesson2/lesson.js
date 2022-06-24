var container = $(".container");
var slider = $(".slider");
var foreground = $(".foreground");

slider.on("mousedown", function (e) {
    var isSliding = true;
    e.preventDefault();

    container.on("mousemove", function (e) {
        var left = e.pageX - container.offset().left;
        // left = Math.min(container.width(), left);
        console.log(e.pageX);

        if (left <= container.width()) {
            slider.css({
                left: left,
            });
            foreground.css({
                width: left,
            });
            
        }
    });
    console.log(isSliding);
});

$(document).on("mouseup", function () {
    var isSliding = false;

    console.log(isSliding);
    container.off("mousemove");
});
