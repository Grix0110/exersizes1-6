// console.log(__dirname);

// const fs = require("fs");

// const message = "Hello, Buckwheat!";

// const fileName = "hello.txt";

///////////////// write the message into  a File //////////////////

// fs.writeFileSync(__dirname + '/' + fileName, message);

// fs.writeFile(__dirname + "/" + fileName, message, () => {
//     //some message
//     console.log("i just wrote into the file");
// });

///////////////// reading from a file ///////////////////

// const byeFile = "byeMessage.txt";

//synchronous

// const byeMessage = fs.readFileSync(byeFile, "utf8");

// console.log(byeMessage);

//asynchronous

// fs.readFile(__dirname + "/" + byeMessage, "utf8", (error, contents) => {
//     if (error) {
//         console.log(`[CALLBACK] Something went wrong`, error);
//         return;
//     } else {
//         console.log(`[CALLBACK] bye file: ${contents}`);
//     }
// });

////////////////// GETTING A FILES INFO \\\\\\\\\\\\\\\\\\\

// 1. Synchronous
// const info = fs.statSync(message);
// console.log(`[SYNC] file info: `, info);

// // 2. Callback

// fs.stat(__dirname + "/" + message, (error, info) => {
//     if (error) {
//         console.log("Something went Wrong!");
//         return;
//     } else {
//         console.log(`[CALLBACK] file info:`, info);
//     }
// });

//////////////  \\\\\\\\\\\\\\\\\\

///////////////////////////// YAIR NOTES \\\\\\\\\\\\\\\\\\\\\\\\\\\\

const fs = require("fs");

console.log("current directory:", __dirname);

const message = "Hello, Buckwheat 🦖";

const helloFile = "hello.txt";

///////////// WRITING TO A FILE //////////////

// 1. Synchronous way
// write the message into helloFile inside the current directory
fs.writeFileSync(__dirname + '/' + helloFile, message);
console.log('[SYNC] I just wrote to the file!');

// 2. Callback (async)
fs.writeFile(__dirname + "/" + helloFile, message, () => {
    // something here
    console.log("[CALLBACK] I just wrote to the file!");
});

///////////// READING FROM A FILE ////////////////

const byeFile = "bye.txt";

// 1. Synchronous
const byeMessage = fs.readFileSync(__dirname + "/" + byeFile, "utf8");
console.log("[SYNC] bye file: " + byeMessage);

// 2. Callback
fs.readFile(__dirname + "/" + byeFile, "utf8", (error, contents) => {
    if (error) {
        console.log("[CALLBACK] Something went wrong!", error);
        return;
    }
    console.log(`[CALLBACK] bye file: ${contents}`);
});

///////////// GETTING A FILE'S INFO ////////////////
// 1. Synchronous
const info = fs.statSync(__dirname + "/" + helloFile);
console.log("[SYNC] file info", info);

// 2. Callback
fs.stat(__dirname + "/" + helloFile, function (err, info) {
    if (err) {
        console.log("Something went wrong", err);
        return;
    }

    console.log("[CALLBACK] file info", info);
});

///////// READING CONTENTS OF A DIRECTORY /////////
// 1. synch
const contents = fs.readdirSync("/");
console.log("[SYNC] dir contents");
for (const item of contents) {
    console.log(`- ${item}`);
}

// 2. callback
// fs.readdir('/', (err, contents) => {
//     console.log('[CALLBACK] dir contents');
//     for (const item of contents) {
//         .log(`- ${item}`);
//     }
// });

// 2a. callback with extra info!
fs.readdir("/", { withFileTypes: true }, (err, contents) => {
    console.log("[CALLBACK] dir contents");
    if (err) {
        console.log("something went wrong", err);
        return;
    }

    for (const item of contents) {
        console.log(item.name);
        if (item.isDirectory()) {
            console.log("📁");
        } else {
            console.log("📜");
        }
    }
});

// Crawl a directory, listing its contents.
// If one of the items is a directory itself,
// RECURSE! call this function on the directory too :)
function crawl(dirPath) {
    fs.readdir(dirPath, { withFileTypes: true }, (err, contents) => {
        console.log("[CALLBACK] dir contents");
        if (err) {
            console.log("something went wrong", err);
            return;
        }

        for (const item of contents) {
            console.log(item.name);
            if (item.isDirectory()) {
                console.log("📁");
                crawl(dirPath + "/" + item.name);
            } else {
                console.log("📜");
                // Now... read the file!
                // and print its contents....
            }
        }
    });
}

crawl(__dirname + "/" + "travel");

// Example of converting to JSON
const weather = {
    hot: true,
    sunny: true,
    wind: 2,
};

// Make it pretty by indenting each new level with 4 spaces :)
const json = JSON.stringify(weather, null, 4);
console.log(json);