const phrase = "Tis better to have loved than never to have loved at all.";

console.log(phrase.toUpperCase());

const upperCase = phrase
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

console.log(upperCase);
