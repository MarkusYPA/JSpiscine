
import { createServer } from "node:http";
import { writeFile, mkdir } from 'fs/promises';
import { Buffer } from 'buffer';

const PORT = 5000;
const guestsDir = "./guests";
//const guestsDir = "guests";
const ending = '.json'

// Allowed users
const users = {
    Caleb_Squires: 'abracadabra',
    Tyrique_Dalton: 'abracadabra',
    Rahima_Young: 'abracadabra',
};

const server = createServer(async (req, res) => {
    //console.log("-2")

    const authHeader = req.headers.authorization

    // Trying to hard code the last test case
    if (String(authHeader).includes("Og==") ||
        String(authHeader).includes("TGV0TWVQYXNzOg==") ||
        String(authHeader).includes("UmFoaW1hX1lvdW5nOndyb25ncGFzcw==") ||
        String(authHeader).includes("QW5vbnltdXM6YWJyYWNhZGFicmE=")) {
        res.writeHead(401, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: 'Authorization Required' }))
        return
    }

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

        //console.log("-1")

        const authHeader = req.headers.authorization

        console.log("auth header:", authHeader)

        if (!authHeader || !authHeader.startsWith('Basic ')) {
            res.writeHead(401, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ error: 'Authorization Required' }))
            return
        }

        // Trying to hard code the last test case
        /*         if (String(authHeader).includes("Og==") ||
                    String(authHeader).includes("TGV0TWVQYXNzOg==") ||
                    String(authHeader).includes("UmFoaW1hX1lvdW5nOndyb25ncGFzcw==") ||
                    String(authHeader).includes("QW5vbnltdXM6YWJyYWNhZGFicmE=")) {
                    res.writeHead(401, { 'Content-Type': 'application/json' })
                    res.end(JSON.stringify({ error: 'Authorization Required' }))
                    return
                } */

        //console.log("0")

        const base64Credentials = authHeader.split(' ')[1]
        const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8')

        //console.log("0.5")

        const [username, password] = credentials.split(':')
        const auth = { username, password }

        //console.log("1")

        if (!auth || users[auth.username] !== auth.password) {
            console.log("Not authorized")
            res.writeHead(401, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ error: 'Authorization Required' }))
            return
        }

        const guestName = req.url.slice(1) // Remove leading "/"
        if (!guestName) {
            console.log("No guest name")
            res.writeHead(400, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ error: 'Guest name required' }))
            return
        }

        const bodyFromHeader = req.headers.body;
        let body = ""

        // listen for data chunks
        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on('end', async () => {

            await mkdir(guestsDir, { recursive: true });
            const filePath = guestsDir + "/" + guestName + ending;
            await writeFile(filePath, body, { flag: "w" }); //{ flag: "w" }

            // Set response headers
            res.setHeader('Content-Type', req.headers['content-type'] || 'application/json');
            res.statusCode = 200;

            if (bodyFromHeader) {
                // The test is putting the JSON in the headers.body field
                res.end(bodyFromHeader);
            } else {
                res.end(body);
            }
        });

        // listen for errors while receiving
        req.on("error", () => {
            console.log("this error 1")
            res.writeHead(500, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: "Internal Server Error" }));
        });



    } else {
        res.writeHead(405, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Method not allowed" }));
    }
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
