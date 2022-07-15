const express = require("express");
const app = express();
const hb = require("express-handlebars");
const data = require("./data.json");

// Handlebars config
app.engine("handlebars", hb.engine());
app.set("view engine", "handlebars");
// END Handlebars config

app.use(express.static("./public"));
app.use(express.static("./projects"));

const PORT = 8080;

// Use middleware to help us read req.body, for submitted forms!
app.use(express.urlencoded({ extended: false }));

// function call on specific route

app.get("/", (req, res) => {
    res.render("home", {
        data,
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        data,
    });
});

app.get("/project/:project/description", (req, res) => {
    const project = req.params.project;
    const foundProject = data.find((item) => item.directory === project);
    if (!foundProject) {
        return res.sendStatus(404);
    }
    const { name, description, directory } = foundProject;
    res.render("description", {
        data,
        name,
        description,
        directory,
    });
});

app.listen(PORT, console.log(`Running on http://localhost:${PORT}`));
