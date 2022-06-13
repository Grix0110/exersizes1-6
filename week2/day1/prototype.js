var person = {
    eyes: 2,
    legs: 2,
};

var mammal = {
    breathes: "true",
    blood: "warm",
};

var me = Object.create(person);

me.hair = "super awesome";

for (var key in me) {
    console.log(key);
}

