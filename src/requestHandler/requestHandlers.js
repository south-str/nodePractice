const querystring = require('querystring'),
  fs = require('fs');

function root(response){
  console.log(`Request handler 'root' was called.`);

  /*
  //let body = `<!DOCTYPE html><html><head><title>root</title><body><p>this is root</p>`;
  let stream = fs.createReadStream(__dirname + '/../client/template/index.html');
  response.writeHead(200, {'Content-Type': 'text/html'});
  stream.pipe(response);
  response.end();
  */
  let body = fs.readFile(__dirname + '/../client/template/index.html', (err, data) => {
    if(err){
      console.log(err);
    }else{
      /*
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(data);
      response.end();
      */
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html');
      response.end(data);
    }
  });
}

exports.root = root;
