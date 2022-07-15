const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter.js");

const PORT = 8080;

app.use(express.static("./Ticker"));

app.get("/ticker", (req, res) => {
    getToken((error, bearerToken) => {
        if (error) {
            console.log("error in getToken", error);
            return;
        }
        getTweets(bearerToken, (error, tweets) => {
            if (error) {
                console.log("error in getTweets: ", error);
                return;
            }
            const filtered = filterTweets(tweets);
            res.json(filtered);
        });
    });
});

app.listen(PORT, console.log(`Listening on ${PORT}`));
