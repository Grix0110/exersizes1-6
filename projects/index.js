const http = require("http");
const fs = require("fs");
const path = require("path");
const { getHomePage } = require("./home-page.js");
// const { getMaster } = require("./master.js");
const PORT = 8080;

// const contentTypes = {
//     ".html": "text/html",
//     ".css": "text/css",
//     ".js": "text/javascript",
//     ".json": "application/json",
//     ".gif": "image/gif",
//     ".jpg": "image/jpeg",
//     ".png": "image/png",
//     ".svg": "image/svg+xml",
// };

// const keys = Object.keys(contentTypes);
// const values = Object.values(contentTypes);

const server = http.createServer((req, res) => {
    req.on("error", (err) => console.log(err));
    res.on("error", (err) => console.log(err));

    console.log("New Request", process.pid, req.method, req.url);
    console.log("REQUEST RECEIVED", req.url);

    // ❌ Unsupported Methods
    if (req.method === `GET`) {
        res.statusCode = 200;
    } else {
        res.statusCode = 405;
        return res.end();
    }

    // 🟢 Serve Home page
    if (req.url === "/") {
        // Work to do...
        const homePage = getHomePage();
        console.log(homePage);
        return res.end(homePage);
    }

    const filePath = path.resolve(path.join(__dirname, req.url));

    console.log(filePath);

    // ❌ No File for that Path
    fs.stat(filePath, (err, metaData) => {
        if (err) {
            res.statusCode = 404;
            console.log("NO FILE 404");
            res.end();
            return;
        }

        // ❌ Only serve project files
        const projectsDirectory = path.join(__dirname, "portfolio");

        if (!filePath.startsWith(projectsDirectory)) {
            res.statusCode = 403;
            console.log("ERROR 403!!!");
            res.end();
            return;
        }

        if (metaData.isFile()) {
            // 🟢 Send back a content-type header
            const extension = path.extname(filePath);

            console.log("extension ", extension);

            // Version 1: Manual Check
            if (extension === ".html") {
                res.setHeader("content-type", "text/html");
            } else if (extension === ".css") {
                res.setHeader("content-type", "text/css");
            } else if (extension === ".js") {
                res.setHeader("content-type", "text/javascript");
            } else if (extension === ".json") {
                res.setHeader("content-type", "application/json");
            } else if (extension === ".gif") {
                res.setHeader("content-type", "image/gif");
            } else if (extension === ".jpg") {
                res.setHeader("content-type", "image/jpg");
            } else if (extension === ".png") {
                res.setHeader("content-type", "image/png");
            } else if (extension === ".svg") {
                res.setHeader("content-type", "image/svg+xml");
            } else {
                res.statusCode = 404;
                console.log("ERROR 404");
                res.end();
            }

            // Version 2: More elegant: use the contentType object above

            fs.createReadStream(filePath).pipe(res);

            // ❌ Handle Readstream Errors
            if (err) {
                res.statusCode = 500;
                console.log("ERROR 500");
                res.end();
                return;
            }
        } else {
            // 🟢 Add trailing slash by default
            if (!req.url.endsWith("/")) {
                const newLocation = req.url + "/";
                res.statusCode = 302;
                console.log("ERROR 302");
                res.setHeader("location", newLocation);
                return res.end();
            }
            // 🟢 Respond with index.html by default
            fs.createReadStream(filePath + "/index.html").pipe(res);
        }
    });
});

server.listen(PORT, () =>
    console.log(`🟢 Server listening on ${PORT}...\nhttp://localhost:${PORT}`)
);
