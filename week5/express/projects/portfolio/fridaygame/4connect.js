var slots = $(".slot");
var currentPlayer = 1;

// Clicklistener for Columns
$(".column").on("click", function (e) {
    // iteration variables
    var column = $(e.currentTarget);
    var columnSlots = $(column.children());

    // animation variables
    var field = $(".hole");
    var container = $(".container");
    var background = $("body");

    // going from bottom to top and color the hole
    for (var i = columnSlots.length - 1; i >= 0; i--) {
        var hole = columnSlots.eq(i).children();
        var rowIndex = hole.parent().index();
        var rows = $(".row-" + rowIndex);

        // Checking if a hole was played already and add a Class
        if (!hole.hasClass("player1") && !hole.hasClass("player2")) {
            hole.addClass("player" + currentPlayer);

            // Check for vertical or horizontal Win
            var victoryV = checkForWin(columnSlots);
            var victoryH = checkForWin(rows);
            var victoryD = checkForWinD();

            // when a player has archied a possible Win the colored holes get removed and animations follow
            if (victoryH || victoryV || victoryD) {
                setTimeout(function () {
                    alert("VICTORY!!! Player " + currentPlayer + " has won!");
                    field.addClass("colorBoard");
                    container.addClass("rotate");
                    background.addClass("background");
                    // confetti();
                }, 100);
                // clearTimeout(confetti);
                setTimeout(function () {
                    $(".player1").removeClass("player1");
                    $(".player2").removeClass("player2");
                }, 2000);
                field.removeClass("colorBoard");
                container.removeClass("rotate");
                background.removeClass("background");
            } 

            // switch between diffrent Player 1 and 2
            currentPlayer = currentPlayer === 1 ? 2 : 1;

            break;
        }
    }
});

function checkForWin(vari) {
    var count = 0;

    // loop through the objects/holes that are passed to the function
    for (var i = 0; i < vari.length; i++) {
        var hole = vari.eq(i).children();

        // if a hole has a class of one of the players assigned add +1 to the count
        if (hole.hasClass("player" + currentPlayer)) {
            count++;

            // if the count equals 4 than a player has won otherwise the count will be reset to 0
            if (count === 4) {
                return true;
            }
        } else {
            count = 0;
        }
    }
}

// array of the index of all possible diagonals
var IndexD = [
    [3, 8, 13, 18],
    [4, 9, 14, 19, 24],
    [5, 10, 15, 20, 25, 30],
    [11, 16, 21, 26, 31, 36],
    [17, 22, 27, 32, 37],
    [23, 28, 33, 38],
    [2, 9, 16, 23],
    [1, 8, 15, 22, 29],
    [0, 7, 14, 21, 28, 35],
    [6, 13, 20, 27, 34, 41],
    [12, 19, 26, 33, 40],
    [18, 25, 32, 39],
];

function checkForWinD() {
    // accessing the list of all possible diagonals
    for (var possibleD of IndexD) {
        var orderedSlots = $();

        // going through all possibleDiagonals and add their value to the empty orderedSlots object
        for (var i of possibleD) {
            var slotIndex = $(slots[i]);

            orderedSlots = orderedSlots.add(slotIndex);
        }
        // passing the added diagonalSlots object to the checkForWin function
        if (checkForWin(orderedSlots)) {
            return true;
        }
    }
}

// /////////// CONFETTI /////////// //

function confetti() {
    const Confettiful = function (el) {
        this.el = el;
        this.containerEl = null;

        this.confettiFrequency = 3;
        this.confettiColors = ["#fce18a", "#ff726d", "#b48def", "#f4306d"];
        this.confettiAnimations = ["slow", "medium", "fast"];

        this._setupElements();
        this._renderConfetti();
    };

    Confettiful.prototype._setupElements = function () {
        const containerEl = document.createElement("div");
        const elPosition = this.el.style.position;

        if (elPosition !== "relative" || elPosition !== "absolute") {
            this.el.style.position = "relative";
        }

        containerEl.classList.add("confetti-container");

        this.el.appendChild(containerEl);

        this.containerEl = containerEl;
    };

    Confettiful.prototype._renderConfetti = function () {
        this.confettiInterval = setInterval(() => {
            const confettiEl = document.createElement("div");
            const confettiSize = Math.floor(Math.random() * 3) + 10 + "px";
            const confettiBackground =
                this.confettiColors[
                    Math.floor(Math.random() * this.confettiColors.length)
                ];
            const confettiLeft =
                Math.floor(Math.random() * this.el.offsetWidth) + "px";
            const confettiAnimation =
                this.confettiAnimations[
                    Math.floor(Math.random() * this.confettiAnimations.length)
                ];

            confettiEl.classList.add(
                "confetti",
                "confetti--animation-" + confettiAnimation
            );
            confettiEl.style.left = confettiLeft;
            confettiEl.style.width = confettiSize;
            confettiEl.style.height = confettiSize;
            confettiEl.style.backgroundColor = confettiBackground;

            confettiEl.removeTimeout = setTimeout(function () {
                confettiEl.parentNode.removeChild(confettiEl);
            }, 5000);

            this.containerEl.appendChild(confettiEl);
        }, 50);
    };

    window.confettiful = new Confettiful(document.querySelector(".container"));
}
