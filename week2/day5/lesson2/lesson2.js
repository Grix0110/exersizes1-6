(function () {
    var kittys = document.querySelectorAll("#kittys img");
    var currKitty = 0;

    function moveKittys() {

        kittys[currKitty].classList.remove("onscreen");
        kittys[currKitty].classList.add("exit-left");

        currKitty++;
        if (currKitty >= kittys.length) {
            currKitty = 0;
        }

        kittys[currKitty].classList.add("onscreen");

        setTimeout(moveKittys, 4000);
    }

    setTimeout(moveKittys, 1000);

    document.addEventListener("transitionend", function (e) {
        e.target.classList.remove("exit-left");
    });
})();