const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const basicAuth = require("basic-auth");

const PORT = 8080;

const app = express();

// Use cookie-parser middleware to help us read req.cookies!
app.use(cookieParser());

// Use middleware to help us read req.body, for submitted forms!
app.use(express.urlencoded({ extended: false }));

// Log every request - and then go on to the NEXT middleware!
app.use((req, res, next) => {
    const now = new Date();
    console.log(`${now.toUTCString()}\t${req.method}\t${req.url}`);
    // IMPORTANT:
    next();
});

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
app.use('/Glasshouse', auth);

app.get("/cookie", (req, res) => {
    res.send(
        `<form method="post">
            <p>
                <label for="cookie">Please accept our Cookies!</label>
            </p>
            <input type="submit" value="Agree!" />
        </form>`
    );
});

app.post("/cookie", (req, res) => {
    res.cookie("cookie", 1);
    const reqUrl = req.cookies.reqUrl;
    res.redirect(reqUrl);
});

app.use((req, res, next) => {
    if (req.cookies.cookie !== "1") {
        const requestUrl = req.url;
        res.cookie("reqUrl", requestUrl);
        return res.redirect("/cookie");
    }
    next();
});

app.get("/", (req, res) => {
    res.send("Hello there!");
});

app.get("/hello.json", (req, res) => {
    const data = {
        message: "Hi there, everyone!",
    };
    // send some JSON back to the client
    res.json(data);
});

app.get("/vote", (req, res) => {
    // Needs cookie-parser to be installed & used on the app first!
    if (req.cookies.voted === "1") {
        // send a REDIRECT to the client
        return res.redirect("/");
    }
    // send a FILE to the client
    res.sendFile(__dirname + "/vote.html");
});

// Client sends in a submitted form from the '/vote' page
app.post("/vote", (req, res) => {
    // grabs all the submitted form data as an object
    const data = req.body;
    // console.log(data);
    console.log(
        `User voted for ${data.animal} and commented: "${data.message}"`
    );
    res.cookie("voted", 1);
    res.redirect("/");
});

app.get("/secret", (req, res) => {
    // send an HTTP status code
    res.sendStatus(403);
});

// DYNAMIC route, with a placeholder for user-generated content
app.get("/profile/:id", (req, res) => {
    console.log(req.params);
    res.send(`<h1>Profile of user number ${req.params.id}</h1>`);
});

const projectsPath = path.join(__dirname, "projects/portfolio");

// Serve all files in the given directory as static files,
// just as they are, with no extra processing.
app.use(express.static(projectsPath));

const publicPath = path.join(__dirname, "public");

// Serve static files, but with a given PREFIX to the route.
app.use("/public", express.static(publicPath));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});