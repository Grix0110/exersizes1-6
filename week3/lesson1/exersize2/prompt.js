(function () {
    translateNumber();
    function translateNumber() {
        try {
            function askForNumber() {
                var num = prompt("Please enter a number between 1 and 10");
                if (num >= 1 && num <= 10 && num == parseInt(num)) {
                    return num;
                }
                throw new Error("Bad number");
            }
            var numToTrans = askForNumber();
 
            if (numToTrans == 1) {
                alert("translates to: EINS");
            } else if (numToTrans == 2) {
                alert("translates to: ZWEI");
            } else if (numToTrans == 3) {
                alert("translates to: DREI");
            } else if (numToTrans == 4) {
                alert("translates to: VIER");
            } else if (numToTrans == 5) {
                alert("translates to: FÜNF");
            } else if (numToTrans == 6) {
                alert("translates to: SECHS");
            } else if (numToTrans == 7) {
                alert("translates to: SIEBEN");
            } else if (numToTrans == 8) {
                alert("translates to: ACHT");
            } else if (numToTrans == 9) {
                alert("translates to: NEUN");
            } else if (numToTrans == 10) {
                alert("translates to: ZEHN");
            }
            
        } catch (error) {
            translateNumber();
        }
    }
})();
