
import { createServer } from "node:http";
import { writeFile } from "node:fs/promises";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";

const PORT = 5000;
const guestsDir = "./guests";

const server = createServer(async (req, res) => {

    // GET not necessary for this exercise, but nice to have all the same
    if (req.method === 'GET') {
        const urlParts = req.url.split('/');
        const filename = urlParts[urlParts.length - 1]; // Get the last part of the URL
        const filePath = guestsDir + "/" + filename + ending;

        readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                if (err.code === 'ENOENT') {    // error no entry / entity
                    res.writeHead(404, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: `guest not found` }));
                } else {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'server failed' }));
                }
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(data);
            }
        });
        
    } else if (req.method === "POST") {

        const fileName = req.url
        

        // incoming data is a stream, so add listeners with req.on()

        // listen for data chunks
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });

        // listen for end of stream
        req.on("end", async () => {
            try {
                // recursive allows for any missing parent directory to be created
                //await mkdir(guestsDir, { recursive: true });

                const filePath = join(guestsDir, `${fileName}.json`);
                await writeFile(filePath, body, 'utf-8');

                res.writeHead(201, { "Content-Type": "application/json" });
                res.end(body);
            } catch (error) {
                res.writeHead(500, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ error: "server failed" }));
            }
        });

        // listen for errors while receiving
        req.on("error", () => {
            res.writeHead(500, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: "server failed" }));
        });

    } else {
        res.writeHead(405, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Method not allowed" }));
    }
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
