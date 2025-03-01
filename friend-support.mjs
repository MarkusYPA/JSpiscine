import { createServer } from 'http';
import { readFile } from 'fs';

const port = 5000;
const guestsDir = './guests';
const ending = '.json'

const server = createServer((req, res) => {

    if (req.method === 'GET') {
        const urlParts = req.url.split('/');
        const filename = urlParts[urlParts.length - 1]; // Get the last part of the URL
        const filePath = guestsDir +"/"+ filename + ending;

        readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                if (err.code === 'ENOENT') {    // error no entry / entity
                    res.writeHead(404, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: `guest not found` }));  //({ error: `guest not found: ${filePath}` }));
                } else {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'server failed' }));
                }
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(data);
            }
        });

    } else {
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Method not allowed' }));
    }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});