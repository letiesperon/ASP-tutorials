var static = require('node-static');
var http = require('http');

var file = new(static.Server)();

const port = process.env.PORT || 8080;

process.on('SIGINT', signal => {
  console.log('SIGINT. Chau!')
  process.exit(0)
});

http.createServer(function (req, res) {
  file.serve(req, res);
}).listen(port);

console.log(`Server started on ${port}`);
