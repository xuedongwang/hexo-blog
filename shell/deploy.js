const fs = require('fs');
const path = require('path');
const OSS = require('ali-oss');
const argv = require('minimist')(process.argv.slice(2));
const FILE_DIR = path.join(__dirname, '../public');
let client = new OSS({
  bucket: argv['bucket'],
  region: argv['region'],
  accessKeyId: argv['accessKeyId'],
  accessKeySecret: argv['accessKeySecret']
});

let errorCount = 0;
let count = 0;
async function upload (filepath) {
  try {
    await client.put(filepath.replace(FILE_DIR, ''), filepath);
    console.log(`第${++count}个文件，${filepath}上传完成`);
    errorCount = 0;
  } catch (e) {
    if (errorCount ++ < 10) {
      console.log(`文件上传失败，正在进行第${errorCount}次重试`);
      upload(filepath);
    } else {
      throw e;
    }
  }
}
function readDir (dir) {
  const dirs = fs.readdirSync(dir);
  dirs.forEach(item => {
    var stat = fs.statSync(path.join(dir, item));
    if (stat.isDirectory()) {
      readDir(path.join(dir, item))
    } else {
      upload(path.join(dir, item));
    }
  })
}

readDir(FILE_DIR)