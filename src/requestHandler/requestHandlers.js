const querystring = require('querystring'),
  fs = require('fs'),
  __ = require('underscore');

async function root(response){
  //console.log(`Request handler 'root' was called.`);
  try{
    const index = await readFile('src/client/template/index.html'),
      body = await readFile('src/client/template/body.html'),
      compiledIndex = __.template(index),
      compiledBody = __.template(body),
      bodyInclude = compiledBody({title: 'first article', article: '<p>test</p>'});
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.write(compiledIndex({
      title: 'test',
      body: bodyInclude
    }));
  }catch(e){
    console.log(`[root]:`);
    console.log(e);
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/html');
    response.write(`<p>${e}</p>`);
  }
  response.end();
}

function readFile(filename, encode = 'utf-8'){
  return new Promise((resolve, reject) => {
    fs.readFile(filename, encode, (err, data) => {
      if(err){
        console.log(`[readFile]:Failed`);
        console.log(`[readFile]:${err}`);
        reject(err);
      }else{
        console.log(`[readFile]:Succeeded`);
        console.log(`[readFile]:${data}`);
        resolve(data);
      }
    });
  });
}

function promiseReadFile(response){
  console.log(`Request handler 'asyncReadFile' was called.`);
  const html = readFile('./src/client/template/index.html');
  html
    .then(data => {
      // promiseで戻された値を使って何かする
      console.log(`[then-data]:${data}`);
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html');
      response.end(data);
    }, err => {
      // promiseで起きたエラーを使って何かする
      console.log(`[then-err]:${err}`);
      response.statusCode = 404;
      response.setHeader('Content-Type', 'text/plain');
      response.end(err.message);
    })
    .catch(reason => {
      // thenで起きたエラーをキャッチする
      console.log(`[catch]:${reason}`);
      response.statusCode = 404;
      response.setHeader('Content-Type', 'text/plain');
      response.end(reason.message);
    })
}

function promiseReadDir(response){
  const dir = new Promise((resolve, reject) => {
    fs.readdir('./src/client/template/', (err, files) => {
      !err ? resolve(files) : reject(err);
    });
  });
  dir
    .then(data => {
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/plain');
      data.forEach(e => {
        response.write(`${e}\n`);
      });
      response.end();
    }, err => {
      response.statusCode = 404;
      response.setHeader('Content-Type', 'text/plain');
      response.end(err.message);
    })
    .catch(reason => {
      console.log(reason);
    });
}

exports.root = root;
exports.promiseReadFile= promiseReadFile;
exports.promiseReadDir = promiseReadDir;
