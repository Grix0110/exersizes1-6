const fs = require("fs");

const filePath = __dirname + "/" + "files";

///////////////////// EXERSIZE 1 \\\\\\\\\\\\\\\\\\\\\\\\\

function logSizes(dirPath) {
    fs.readdir(dirPath, { withFileTypes: true }, (err, contents) => {
        if (err) {
            console.log("something went wrong", err);
            return;
        }
        for (const item of contents) {
            if (item.isDirectory()) {
                logSizes(dirPath + "/" + item.name);
            } else {
                fs.stat(dirPath, (error, stats) => {
                    if (error) {
                        console.log("something went wrong", error);
                    } else {
                        console.log(`${dirPath}/${item.name}`, stats["size"]);
                    }
                });
            }
        }
    });
}

logSizes(filePath);

////////////////////////// EXERSIZE 2 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const jsonFile = "files.json";

function mapSizes(dirPath) {
    const contents = fs.readdirSync(dirPath, { withFileTypes: true });
    let newObject = {};

    for (const item of contents) {
        console.log(item);
        if (item.isDirectory()) {
            newObject[item.name] = mapSizes(dirPath + "/" + item.name);
        } else {
            const info = fs.statSync(dirPath + "/" + item.name);
            newObject[item.name] = info.size;
        }
    }
    return newObject;
}

const newFile = JSON.stringify(mapSizes(filePath), null, 4);

fs.writeFileSync(__dirname + "/" + jsonFile, newFile);

///////////////////////// EXERSIZE 3 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
