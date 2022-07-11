const fs = require("fs");
let html = "<h1>Home</h1>";

(function () {
    fs.readdir("portfolio", { withFileTypes: true }, (err, contents) => {
        if (err) {
            console.log("something went wrong", err);
            return;
        }

        for (const item of contents) {
            console.log(item.name);
            if (item.isDirectory()) {
                html += `<body>
                <a href="/portfolio/${item.name}"> ${item.name} </a>
                </body>`;
            }
        }
    });
})();

module.exports.getHomePage = function () {
    return html;
};