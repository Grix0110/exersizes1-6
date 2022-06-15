(function () {
    //EXERSIZE 1

    var str = document.getElementsByTagName("p");
    for (var i = 0; i < str.length; i++) {
        str[i].style.fontStyle = "italic";
        str[i].style.textDecoration = "underlined";
        str[i].style.fontWeight = "bold";
    }

    //EXERSIZE 2

    var text = document.getElementsByClassName("text");
    console.log("text: ", text);

    //EXERSIZE 3

    function creation() {
        var create = document.createElement("div", text);
        var inside = document.createTextNode("AWESOME");
        document.body.appendChild(create);
        create.appendChild(inside);
        create.style.position = "fixed";
        create.style.zIndex = 2147483647;
        create.style.left = 20;
        create.style.top = 100;
        create.style.fontSize = 200;
    }

    creation();
})();
