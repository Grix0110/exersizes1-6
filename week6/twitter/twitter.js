const https = require("https");
const secrets = require("./secret.json");
// const { promisify } = require("util");

module.exports.getToken = function (callback) {
    const cred = `${secrets.consumerKey}:${secrets.consumerSecret}`;
    const encodedCred = Buffer.from(cred).toString("base64");

    const options = {
        host: "api.twitter.com",
        path: "/oauth2/token",
        method: "POST",
        headers: {
            Authorization: `Basic ${encodedCred}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8.",
        },
    };

    function callToken(resp) {
        if (resp.statusCode != 200) {
            callback(new Error(resp.statusCode));
        } else {
            let body = "";
            resp.on("data", (chunk) => {
                body += chunk;
            });

            resp.on("end", () => {
                let parsedBody = JSON.parse(body);
                callback(null, parsedBody.access_token);
            });
        }
    }

    const reqTweet = https.request(options, callToken);
    reqTweet.end("grant_type=client_credentials");
};

module.exports.getTweets = function (token, callback) {
    const options = {
        host: "api.twitter.com",
        path: "/1.1/statuses/user_timeline.json?screen_name=nytimes&tweet_mode=extended&count=5",
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    // const tweetCall = promisify(callTweets);

    function callTweets(resp) {
        if (resp.statusCode != 200) {
            callback(new Error(resp.statusCode));
        } else {
            let tweet = "";
            resp.on("data", (chunk) => {
                tweet += chunk;
            });

            resp.on("end", () => {
                let parsedTweet = JSON.parse(tweet);
                // console.log("tweet in twitter.js: ", parsedTweet);
                callback(null, parsedTweet);
            });
        }
    }
    const callTweet = https.request(options, callTweets);
    callTweet.end();
};

module.exports.filterTweets = function (tweets) {
    let filteredTweets = [];

    for (var tweet of tweets) {
        if (tweet.entities.urls.length === 1) {
            filteredTweets.push({
                headline: tweet.full_text.slice(0, tweet.full_text.indexOf("http")).trim(),
                url: tweet.entities.urls[0].expanded_url,
                created_at: tweet.created_at,
            });
        }
    }
    return filteredTweets;
};
