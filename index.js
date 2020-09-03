const path = require('path')
const fs = require('fs').promises

const myLogPath = path.resolve(__dirname, 'myLog.txt');

/*var log = fs.open('myLog.txt', 'w')
for (var i = 0; i < 10; i++) {
    console.log(i)
    fs.writeFile(log, i + '\n')
}*/

async function myLogger(stringToLog) {
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log(stringToLog, "start", time)
    await fs.readFile(myLogPath, {})
    .then(async function(data) {
      let dataInArray = String(data).split("\n");
      if(dataInArray.length > 9) {
        dataInArray.splice(0, dataInArray.length - 9);
      }
      dataInArray.push(stringToLog);
       fs.writeFile(myLogPath, dataInArray.join("\n"))
      var today = new Date();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      console.log(stringToLog, "end", time)
    });
}

/*async function myLogger(stringToLog) {
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log(stringToLog, "start", time)

  let data;
  try {
    data = await fs.readFile(myLogPath, {});
  } finally {
    if (data !== undefined) {
      let dataInArray = String(data).split("\n");
      if (dataInArray.length > 9) {
        dataInArray.splice(0, dataInArray.length - 9);
      }
      dataInArray.push(stringToLog);
      await fs.writeFile(myLogPath, dataInArray.join("\n"));
    }
  }
  
  var today_1 = new Date();
  var time_1 = today_1.getHours() + ":" + today_1.getMinutes() + ":" + today_1.getSeconds();
  console.log(stringToLog, "end", time_1);
}*/

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

/*function constructOutputPath (originalPath) {
  return path.resolve(
    path.dirname(originalPath),
    'output' + path.extname(originalPath)
  )
}

function writeOutput ({path, content}) {
  return fs.writeFile(path, content)
}

function handleContent (content) {
  return {
    path: constructOutputPath(myPath),
    content: String(content).toUpperCase()
  }
}

fs.readFile(myPath, {})
  .then(handleContent)
  .then(writeOutput)
  .then(() => console.log('done'))
  .catch(console.error)*/