const querystring = require('querystring'),
  fs = require('fs');

function root(response){
  console.log(`Request handler 'root' was called.`);
  const promise = new Promise((resolve, reject) => {
    fs.readFile('src/client/template/index.html', (err, data) => {
      if(err){
        reject(err);
      }else{
        resolve(data);
      }
    });
  });
  promise
    .then(data => {
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html');
      response.end(data);
    })
    .catch(err => {
      console.log(err);
    });
}

function readFile(filename){
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if(err){
        console.log(`[fs]:${err}`);
        reject(err);
      }else{
        console.log(`[fs]:${data}`);
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
