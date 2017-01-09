const fs = require('fs');

function readJSON(filename, encode = 'utf-8'){
  return new Promise((resolve, reject) => {
    fs.readFile(filename, encode, (err, data) => {
      if(err){
        console.log('[readJSON]:Failed');
        console.log(err);
        reject(err);
      }else{
        console.log('[readJSON]:Succeeded');
        resolve(data);
      }
    });
  })
}

async function root(/* */){
  try{
    const main = await readJSON('src/data/main.json'),
      navi = await readJSON('src/data/navi.json');
    return {
      main :JSON.parse(main),
      navi: JSON.parse(navi)
    };
  }catch(e){
    console.log('[data root]:catch');
    console.log(e);
    return e;
  }
}

exports.root = root;
