const fs = require('fs'),
  __ = require('underscore'),
  data = require('../data/data.js');

function readTextFile(filename, encode = 'utf-8'){
  return new Promise((resolve, reject) => {
    fs.readFile(filename, encode, (err, data) => {
      if(err){
        console.log('[readTextFile]:Failed');
        console.log(err);
        reject(err);
      }else{
        console.log('[readTextFile]:Succeeded');
        resolve(data);
      }
    });
  })
}

function errorReport(e, str){
  console.log(str);
  console.log(e);
}

async function root(/* */){
  try{
    const indexTemplate = await readTextFile('src/client/template/index.html')
      .then(data => __.template(data), e => { errorReport(e, '[view root]:then') }),
      mainTemplate = await readTextFile('src/client/template/main.html')
      .then(data => __.template(data), e => { errorReport(e, '[view root]:then') }),
      naviTemplate = await readTextFile('src/client/template/navi.html')
      .then(data => __.template(data), e => { errorReport(e, '[view root]:then') }),
      indexData = await data.root()
      .then(data => data, e => { errorReport(e, '[view root]:then') });
    return indexTemplate({
      title: 'test',
      navi: naviTemplate(indexData.navi),
      main: mainTemplate(indexData.main)
    });
  }catch(e){
    console.log('[view root]:catch');
    console.log(e);
    return e;
  }
}

exports.root = root;
exports.readTextFile = readTextFile;
