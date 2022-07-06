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
                console.log("📁");
                html += `<a href="/portfolio/${item.name}">${item.name}</a>`;
            }
        }
    });
})();

module.exports.getHomePage = function () {
    // Build up the home page here.
    // 1. Read the content of the projects directory
    // fs.readdir
    return html;
};
