const cluster = require("cluster");
const path = require("path");
const { cpus } = require("os");

// 1. Specify what file you want your workers to run -------------------------
cluster.setupMaster({
    exec: path.join(__dirname, "/index.js"),
});

// 2. Find the number of cores available on your machine ---------------------
// 3. Use cluster.fork() to create as many child processes as you have cores -
for (var i = 0; i < cpus().length; i++) {
    cluster.fork();
}

// 4. Listen on the "exit" event to: -----------------------------------------
// cluster.on("exit", (worker) => {
cluster.on("exit", function (worker) {
    // a) Log the process id of the worker that died
    console.log("I'm sorry:", worker.process.pid);
    // b) Spawn a new worker to replace it
    cluster.fork();
});