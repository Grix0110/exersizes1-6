// Exersize 1 //
const numbers = [1, 2, 3, 4, 5];

function reverse(a) {
    const newArray2 = [...a].reverse();
    console.log(newArray2);
}

reverse(numbers);

// Exersize 2 //
const prideLandsCharacters = [
    {
        name: "Zazu",
        species: "Hornbill",
    },
    {
        name: "Rafiki",
        species: "Mandrill",
    },
];

const savannahCharacters = [
    {
        name: "Timon",
        species: "Meerkat",
    },
    {
        name: "Pumbaa",
        species: "Warthog",
    },
];

function combine(a, b) {
    const newArray = [...a, ...b];
    console.log(newArray);
}

combine(prideLandsCharacters, savannahCharacters);

// Exersize 3 //

function logInfo(city) {
    const { name, country, numPeople } = city;

    console.log(
        `${name} is in ${country} and has ${numPeople} inhabitants in it.`
    );
}

console.log(
    logInfo({ name: `Berlin`, country: `Germany`, numPeople: 3800000 })
);

// Exersize 4 //
let berlin = { name: "Rome", country: "Italy" };
let madrid = { name: "Madrid", country: "Spain" };

let getNameAndCountry = ({ name, country }) => [name, country];

let getRelocatedCity = (city1, city2 = { country: "Germany" }) => {
    let [, country] = getNameAndCountry(city2);
    return {
        ...city1,
        country,
    };
};

console.log(getRelocatedCity(madrid, berlin));

// function getNameAndCountry2() {}``

// function getRelocatedCity2(city1, city2) {}
