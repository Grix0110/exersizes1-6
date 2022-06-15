//BUTTON THAT CHANGES COLOR

var button = document.getElementById("my-button");

button.addEventListener("click", function () {
    console.log("BUTTON CLICKED");

    var randomNumber = Math.floor(Math.random() * 360);
    console.log("randomNumber", randomNumber);

    var color = "hsl(" + randomNumber + ", 70%, 70%)";
    console.log("color", color);

    document.body.style.backgroundColor = color;
});

// ADD EMOJIS IN THE BODY

document.body.addEventListener("click", function (event) {
    console.log("BODY CLICKED", event.pageX, event.pageY);

    var emojiElement = document.createElement("span");
    emojiElement.innerText = "🥳";

    // emojiElement.style.position = "absolute";
    // emojiElement.style.top = event.pageY + "px";
    // emojiElement.style.left = event.pageX + "px";

    document.body.appendChild(emojiElement);
});

// REMOVE EVENTLISTENER

var counter = document.getElementById("count");

var currentCount = 0;

counter.addEventListener("click", function counterEventListener(e) {
    e.stopPropagation();
    currentCount++;
    console.log("COUNTER CLICKED", currentCount);

    if (currentCount == 10) {
        console.log("REMOVE EVENT LISTENER");
        counter.removeEventListener("click", counterEventListener);
    }
});
