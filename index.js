const server = require('./src/server/server.js'),
  router = require('./src/router/router.js'),
  requestHandlers = require('./src/requestHandler/requestHandlers.js');

let handle = {};
handle['/'] = requestHandlers.root;
handle['/asyncReadFile'] = requestHandlers.asyncReadFile;

server.start(router.route, handle);
