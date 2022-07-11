const express = require("express");
const app = express();
const hb = require("express-handlebars");
const basicAuth = require("basic-auth");

// Handlebars config
app.engine("handlebars", hb.engine());
app.set("view engine", "handlebars");
// END Handlebars config

app.use(express.static("./public"));
app.use(express.static("./projects"));

const PORT = 8080;

// Use middleware to help us read req.body, for submitted forms!
app.use(express.urlencoded({ extended: false }));

// Authentification function
const auth = function (req, res, next) {
    const creds = basicAuth(req);
    if (!creds || creds.name != "nesone" || creds.pass != "glasshouse") {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="Enter your credentials to see this stuff."'
        );
        res.sendStatus(401);
    } else {
        next();
    }
};

// function call on specific route
app.use("/Glasshouse/", auth);

// const data = require("./data.json");

// const emojis = ["🎉", "🎁", "👀"];

app.get("/", (req, res) => {
    res.render("home", {
        // cohort: "Buckwheat",
        // emojis,
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        // data,
    });
});

app.listen(PORT, console.log(`Running on http://localhost:${PORT}`));