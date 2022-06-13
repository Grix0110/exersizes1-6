function Teacher(firstName, lastName) {
    this.first = firstName;
    this.last = lastName;
}

Teacher.prototype.greeting = function () {
    setTimeout(
        function () {
            console.log("Hello there my name is " + this.first);
        }.bind(this),
        500
    );
};

var alistair = new Teacher("Alistair", "Quinn");
var john = new Teacher("John", "Bon Jovi");
var amy = new Teacher("Amy", "Smith");

console.log("alisatir:", alistair);
console.log("john:", john);
console.log("amy:", amy);

console.log(alistair.greeting());
