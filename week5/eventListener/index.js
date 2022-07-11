const http = require("http");

const PORT = 8080;

const server = http.createServer((request, response) => {
    request.on("error", (error) => console.log(`Request error `, error));
    response.on("error", (error) => console.log(`Response error `, error));

    console.log(`request.method: `, request.method);
    console.log(`request.url: `, request.url);
    console.log(`request.headers: `, request.headers);

    if (request.method === `GET`) {
        if (request.url === `/best-cohort`) {
            response.statusCode = 200;
            response.setHeader(`content-type`, `application/json`);
            response.write(JSON.stringify({ name: `Buckwheat` }));
            response.end();
            console.log(`Status Code: `, response.statusCode);
        } else if (request.url === `/secret`) {
            response.statusCode = 301;
            response.setHeader(`Location`, `/`);
            response.end();
            console.log(`Status Code: `, response.statusCode);
        } else {
            response.setHeader(`content-type`, `text/html`);
            response.statusCode = 200;
            response.write(`
            <h1>Hello World!</h1>
            <br>
            <h2>This is my Server.</h2>
            `);
            response.end();
            console.log(`Status Code: `, response.statusCode);
        }
    } else if (request.method === `POST`){
        let body = ``;
        request.on(`data`, chunk => {
            console.log(`chunk: `, chunk);
            body += chunk;
        });
        response.setHeader(`Location`, `/`);
        request.on(`end`, ()=>{
            response.statusCode = 302;
            response.setHeader(`content-type`, `text/html`);
            response.end(`thanks for submitting`);
            console.log(`body: `, body);
            console.log(`Status Code: `, response.statusCode);
        });
    } else if (request.method === `HEAD`){
        response.statusCode = 200;
        response.setHeader(`content-type`, `text/html`);
        response.end();
        console.log(`Status Code: `, response.statusCode);
    } else {
        response.statusCode = 405;
        response.end();
        console.log(`Status Code: `, response.statusCode);
    }
});

server.listen(PORT, () =>
    console.log(`Hi, I'm listening on Localhost: ${PORT}`)
);
