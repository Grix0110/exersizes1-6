(function () {
    var textInput = $("#text");

    textInput.on("input", function () {
        localStorage.setItem("input", textInput.val());
    });
    
    $(window).on("load", function () {
        var getLocal = localStorage.getItem("input");
        textInput.val(getLocal);
    });
})();
