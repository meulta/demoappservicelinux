"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var express = require("express");
var MyServer = (function () {
    function MyServer() {
        this.server = http_1.createServer(function (req, res) {
            res.writeHead(200);
            res.end('Salut tout les gens !');
        });
        this.expressApp = express();
    }
    MyServer.prototype.start = function () {
        var port = 8080;
        this.server.listen(port);
        console.log("Server start on " + port);
    };
    return MyServer;
}());
exports.MyServer = MyServer;
