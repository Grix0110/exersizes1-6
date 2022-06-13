function logArgs() {
    var completeSentence = "";
    for (var i = 0; i < arguments.length; i++) {
        var newWord = (arguments[i] = "");
        completeSentence += newWord;
    }
    console.log(completeSentence);
}

logArgs.call({}, 'hello');