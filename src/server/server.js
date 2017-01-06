const http = require('http'),
  url = require('url');

function start(route, handle){
  function onRequest(request, response){
    let pathname = url.parse(request.url).pathname;
    console.log(`Request for ${pathname} received.`);
    route(handle, pathname, response, request);
  }

  server = http.createServer(onRequest);
  server.listen(8000);
  console.log(`Server has started on 8000`);
}

exports.start = start;
