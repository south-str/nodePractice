function route(handle, pathname, response, request){
  console.log(`About to route a request for ${pathname}`);
  if(isFunction(handle[pathname])){
    handle[pathname](response, request);
  }else{
    console.log(`No request handler found for ${pathname}`);
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/plain');
    response.end(`404 Not Found`);
  }
}

function isFunction(func){
  if(toString.call(func) === '[object Function]') return true;
  if(toString.call(func) === '[object AsyncFunction]') return true;
  return false;
}
exports.route = route;