(function () {
    var kittys = document.querySelectorAll("#kittys img");
    var currKitty = 0;
    var dots = document.querySelectorAll(".dots");
    var currDot = dots[currKitty];

    function moveKittys(index) {
        kittys[currKitty].classList.remove("onscreen");
        kittys[currKitty].classList.add("exit-left");
        currDot.classList.remove("active");

        currKitty = index;
        if (currKitty >= kittys.length) {
            currKitty = 0;
        }

        if (index == true) {
            currKitty++;
        } else {
            return;
        }

        var nextKitty = kittys[currKitty];
        var nextDot = dots[currKitty];

        nextKitty[currKitty].classList.add("onscreen");
        nextDot.classList.add("active");

        setTimeout(moveKittys, 4000);
    }

    document.addEventListener("transitionend", function (e) {
        e.target.classList.remove("exit-left");
    });

    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function (e) {
            console.log("dot clicked");

            for (var j = 0; j < dots.length; j++) {
                if (dots[j] == clickedDot) {
                    // Check if j is the same as currentKittyIndex

                    if (j === currKitty) {
                        return;
                    }
        });
    }

    setTimeout(moveKittys, 1000);

})();

// var SLIDE_INTERVAL = 4000;
// var carousel = document.querySelector("#carousel");
// var currentKittyIndex = 0;
// var transitioning = false;
// var timeout;

// // Clickable dots - method 1
// (function () {
//     var dots = document.querySelectorAll(".dot");
//     for (var i = 0; i < dots.length; i++) {
//         var dot = dots[i];
//         dot.addEventListener("click", function (e) {
//             console.log("dot clicked");

//             // figure out which dot was clicked
//             // get the clicked dot
//             // get its id
//             // extract the number from the id

//             // Get the 5th character and onward from the id of the clicked element
//             var clickedDot = e.currentTarget;
//             var indexAsString = clickedDot.id.slice(4);
//             // console.log('indexAsString :>> ', indexAsString);
//             // Now convert it to an integer
//             var index = parseInt(indexAsString) - 1;

//             var index = parseInt(e.currentTarget.id.slice(4));
//             // call `slide` function WITH THE INDEX
//             slide(index);
//         });
//     }
// })();

// Clickable dots - method 2
// (function () {

//     function slide(index) {
//         console.log("index :>> ", index);
//         // remove .onscreen from current kitty
//         // add .hidden-left class to current kitty
//         // find next kitty (may need to loop back to the start)
//         // add .onscreen class to next kitty
//         // remove .active from current dot
//         // add .active to next dot

//         // Variables we'll need
//         var kitties = carousel.querySelectorAll(".kitty");
//         var dots = document.querySelectorAll(".dot");
//         var currentKitty = kitties[currentKittyIndex];
//         var currentDot = dots[currentKittyIndex];

//         // Clear away the current (onscreen) kitty and dot
//         transitioning = true;
//         currentKitty.classList.remove("onscreen");
//         currentKitty.classList.add("hidden-left");
//         currentDot.classList.remove("active");

//         // TO DO:
//         // If an index is given - use it!
//         // Otherwise - go on to the next kitty (++)
//         if (index == true) {
//             currentKittyIndex++;
//         } else {
//             return;
//         }

//         // Go on to the next kitty in sequence
//         // currentKittyIndex++;

//         // Go on to the kitty that the user has chosen!
//         currentKittyIndex = index;
//         if (currentKittyIndex === kitties.length) {
//             currentKittyIndex = 0;
//         }

//         // Find the next kitty and dot
//         var nextKitty = kitties[currentKittyIndex];
//         var nextDot = dots[currentKittyIndex];

//         // Show them!
//         nextKitty.classList.add("onscreen");
//         nextDot.classList.add("active");
//     }
//     var dots = document.querySelectorAll(".dot");
//     for (var i = 0; i < dots.length; i++) {
//         dots[i].addEventListener("click", function (e) {
//             var clickedDot = e.currentTarget;

//             // Need to figure out the INDEX of the clicked dot.
//             // We'll count through all the dots, and compare each one with this one!
//             // When we've found the match, we will use the loop counter as the index.

//             for (var j = 0; j < dots.length; j++) {
//                 if (dots[j] == clickedDot) {
//                     // Check if j is the same as currentKittyIndex

//                     if (j === currentKittyIndex) {
//                         return;
//                     }

//                     // Check if there is a transition happening
//                     // If there is, do nothing.

//                     if (transitioning) {
//                         return;
//                     }

//                     if (timeout) {
//                         console.log("timeout will be cleared:>> ", timeout);
//                         clearTimeout(timeout);
//                         // timeout = null;
//                     }
//                     slide(j);
//                     break;
//                 }
//             }
//         });
//     }

// })();

// ...... some code left out here
