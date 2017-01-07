const querystring = require('querystring'),
  fs = require('fs');

function root(response){
  console.log(`Request handler 'root' was called.`);
  const promise = new Promise((resolve, reject) => {
    fs.readFile(__dirname + '/../client/template/index.html', (err, data) => {
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
        reject(err);
      }else{
        resolve(data);
      }
    });
  });
}

async function asyncReadFile(response){
  console.log(`Request handler 'asyncReadFile' was called.`);
  const html = await readFile(__dirname + '/../client/template/index.html');
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  response.end(html);
}

exports.root = root;
exports.asyncReadFile = asyncReadFile;
