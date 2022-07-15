const fs = require("fs").promises;

const filePath = __dirname + "/" + "files";

function logSizes(dirPath) {
    fs.readdir(dirPath, { withFileTypes: true })
        .then((contents) => {
            for (const item of contents) {
                if (item.isDirectory()) {
                    return logSizes(dirPath + "/" + item.name);
                } else {
                    fs.stat(dirPath).then((stats) => {
                        console.log(`${dirPath}/${item.name}`, stats["size"]);
                    });
                }
            }
        })
        .catch((error) => console.log("something went wrong", error));
}

logSizes(filePath);
