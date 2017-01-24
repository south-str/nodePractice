const view = require('../view/view.js'),
  process = require('process');
function route(handle, pathname, response, request){
  console.log(`About to route a request for ${pathname}`);
  if(isFunction(handle[pathname])){
    handle[pathname](response, request);
  }else{
    if(request.method === 'GET'){
      console.log(`request ${request.method} ${pathname}`);
      //ドキュメントルートを決めて、ただのGETメソッドにはファイルを返す
      const documentRoot= process.cwd() + '/src/client/',
        extension = /\..*$/.exec(pathname)[0].slice(1),
        filetype = {
          css: 'css',
          html: 'template',
          js: 'script'
        };
      const file = view.readTextFile(documentRoot + filetype[extension] + pathname);
      file
        .then(data => {
          response.statusCode = 200;
          response.setHeader('Content-Type', '');
          response.end(data);
        }, e => {
          console.log(e);
        })
        .catch(e => {
          response.statusCode = 404;
          response.setHeader('Content-Type', 'text/plain');
          response.end(`404 Not Found`);
        });
      /*
      response.statusCode = 404;
      response.setHeader('Content-Type', 'text/plain');
      response.end(`404 Not Found`);
      */
    }else{
      console.log(`No request handler found for ${pathname}`);
    }
  }
}

function isFunction(func){
  if(toString.call(func) === '[object Function]') return true;
  if(toString.call(func) === '[object AsyncFunction]') return true;
  return false;
}
exports.route = route;
