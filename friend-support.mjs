import { createServer } from 'http';
import { readFile, readFileSync } from 'fs';

const port = 5000;
const guestsDir = './guests';
const ending = '.json'

const server = createServer((req, res) => {

    if (req.method === 'GET') {
        const urlParts = req.url.split('/');
        const filename = urlParts[urlParts.length - 1]; // Get the last part of the URL
        const filePath = guestsDir + "/" + filename + ending;

        // Solution with readFile (async)
/*         readFile(filePath, 'utf8', (err, data) => {
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
        }); */

        // Solution with readFileSync (sync)
        try {
            const data = readFileSync(filePath, 'utf8')
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        } catch (err) {
            if (err.code === 'ENOENT') {    // error no entry / entity
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: `guest not found` }));
            } else {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'server failed' }));
            }
        }

    } else {
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Method not allowed' }));
    }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});