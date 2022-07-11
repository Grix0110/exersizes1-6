// console.log("my first node file");

// console.log("__dirname", __dirname);

// console.log("__filename", __filename);

// console.log("process:", process.argv[2]);

// console.log(module);

// 3 types of Modules
// custom mudules
// core node modules
// npm packages 3. Party modules

// const { sayHello } = require("./fun.js");

// console.log(sayHello());

// core node modules
// const url = require('url');

// console.log(url.parse("https://www.google.com"));

// 3. Party modules - npm node package manager

// const chalk = require('chalk');
// console.log(chalk.yellow('test test'));
// console.log(chalk.bgMagenta('Happy node day Buckwjeat'));

// process.on("beforeExit", function () {
//     console.log("just spit it out");
// });

// process.on("coolEvent", function () {
//     console.log("this cool event just fired");
// });

// process.emit('coolEvent');

// callbacks
// callback - function that is passed as a parameter or argument to another function
//allows us to deal with Async behavior

// function getUserInfo(callback) {
//     setTimeout(function () {
//         const user = {
//             name: "Andrea",
//             hadDog: true,
//             favColor: "cyan",
//         };
//         callback(null, user);
//     }, 2000);
// }

// // const userData = getUserInfo();

// // console.log(userData);

// getUserInfo(function (err, userInfo) {
//     if (err) {
//         console.log("err in getUserInfo:", err);
//     } else {
//         console.log(userInfo);
//     }
// });
const url = require("url");

const input = process.argv[2];

// const querystring = require("node:querystring");

// const myUrl = new URL("http://127.0.0.1:8080/test?a=100&b=200");
// const myUrlTwo = new URL(
//     "https://spiced.academy/program/full-stack-web-development/"
// );

console.log("The protocoll is http: ",
" The host is: ", ${host},
" The hostname is: ", ${hostname},
" The port is: ", ${port},
" The pathname is: ", ${pathname},
" The query is: ", ${search});

// console.log("The value of the a parameter is: ", myUrl);
// console.log("The value of the b parameter is: ", myUrl);
