const http = require(`http`);

const chalk = require(`chalk`);

const qs = require(`querystring`);

const PORT = 8080;

const server = http.createServer((req, res) => {
    req.on(`error`, (err) => console.log(`error in request: `, err));
    res.on(`error`, (err) => console.log(`error in response: `, err));

    if (req.method === `GET`) {
        console.log(`GET request!`);
        res.write(`
            <!doctype html>
            <html>
            <title>Colors</title>
            <form method="POST">
            <input type="text" name="text">
            <select name="color">
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
                <option value="yellow">yellow</option>
                <option value="gray">gray</option>
                <option value="magenta">magenta</option>
                <option value="cyan">cyan</option>
            </select>
            <button type="submit">Go</button>
            </form>
            </html>
        `);
        res.end();
    } else if (req.method === `POST`) {
        let body = ``;

        req.on(`data`, (chunk) => {
            body += chunk;
        });
        req.on(`end`, () => {
            body = qs.parse(body);
            console.log(chalk[body.color](body.text));
            res.write(`
                <html>
                    <title>${body.text}</title>
                    <a href='/' style='color:${body.color}'>${body.text}</a>
                </html>    
            `);
            res.end();
        });
    }
});

server.listen(
    PORT,
    console.log(chalk.green(`I am listening to Localhost:${PORT}`))
);

//     fs.readFile("index.html", "utf8", (err, content) => {
//         if (err) {
//             console.log(err);
//             res.statusCode = 500;
//             res.end(`<h1>Something went wrong. Please try again!</h1>`);
//             return;
//         }

//         res.end(content);
//     });
