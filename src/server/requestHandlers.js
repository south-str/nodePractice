const fs = require('fs'),
  url = require('url'),
  view = require('../view/view.js');

async function root(response){
  //console.log(`Request handler 'root' was called.`);
  view.root()
    .then(html => {
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html');
      response.end(html);
    }, e => {
      console.log('[handler root]:reject');
      console.log(e);
      response.statusCode = 404;
      response.setHeader('Content-Type', 'text/html');
      response.end(e);
    })
    .catch(e => {
      console.log(`[handler root]:catch`);
      console.log(e);
      response.statusCode = 404;
      response.setHeader('Content-Type', 'text/html');
      response.end(`<p>${e}</p>`);
    });
}

async function readFile(response, request){
  const pathname = url.parse(request.url).pathname;
  console.log(`readFile:${pathname}`);
}

exports.root = root;
exports.readFile = readFile;
