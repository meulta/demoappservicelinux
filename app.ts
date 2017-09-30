import * as http from 'http'

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Salut tout les gens !');
});

server.listen(80);