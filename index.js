const server = require('./src/server/server.js'),
  router = require('./src/server/router.js'),
  requestHandlers = require('./src/server/requestHandlers.js');

let handle = {};
handle['/'] = requestHandlers.root;

server.start(router.route, handle);
