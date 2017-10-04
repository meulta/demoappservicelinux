import { Server, createServer } from 'http'
//import * as express from 'express'

export class MyServer {

    private server: Server;
    // private expressApp: express.Application;

    constructor() {
        this.server = createServer((req, res) => {
            res.writeHead(200);
            res.end('Salut tout les gens !');
        });

        //this.expressApp = express();
    }

    public start() {
        let port = 8080;
        this.server.listen(port);
        console.log("Server start on " + port);
    }
}