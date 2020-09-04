const path = require('path')
const fs = require('fs').promises

const myLogPath = path.resolve(__dirname, 'myLog.txt');

async function myLogger(stringToLog) {
    await fs.readFile(myLogPath, {})
    .then(data => {
      let dataInArray = String(data).split("\n");
      if(dataInArray.length > 9) {
        dataInArray.splice(0, dataInArray.length - 9);
      }
      dataInArray.push(stringToLog);
      fs.writeFile(myLogPath, dataInArray.join("\n"))
    });
}

myLogger('aaa')
myLogger('bbb')
myLogger('ccc')
myLogger('ddd')
myLogger('eee')
myLogger('fff')
myLogger('ggg')
myLogger('hhh')
myLogger('iii')
myLogger('jjj')
myLogger('kkk')
myLogger('lll')