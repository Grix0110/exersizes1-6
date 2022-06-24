// Clicklistener for Columns
$(".column").on("click", function (e) {
    var column = $(e.currentTarget);
    var slots = column.children();
    var currentPlayer = 1;

    // going from bottom to top and color the hole
    for (var i = slots.length - 1; i >= 0; i--) {
        var hole = slots.eq(i).children();

        // Checking if a hole was played already 
        if (!hole.hasClass("player" + 1) && !hole.hasClass("player" + 2)) {

            hole.addClass("player" + currentPlayer);

            currentPlayer = currentPlayer === 1 ? 2 : 1;

            // if (count === 0) {
            //     hole.addClass("player" + 1);
            //     count = 1;
            // } else {
            //     hole.addClass("player" + 2);
            //     count = 2;
            // }
            
            break;
        }
    }
});
