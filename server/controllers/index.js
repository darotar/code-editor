const fs = require('fs');
const path = require('path');

const dirArray = __dirname.split("/");
const dirname = dirArray[dirArray.length - 3];
const dirPath = path.resolve(__dirname + '../../../');

exports.getDirname = () => {
  return { dirname };
}

exports.getFiles = () => {
  let fileList = fs.readdirSync(dirPath);

  fileList = fileList.map((file, index) => {
    return {
      file,
      isDir: fs.lstatSync(`${dirPath}/${file}`).isDirectory(),
      id: index 
    }
  });

  return { files: fileList };
}

exports.getFileContent = (file) => {
  return { content: fs.readFileSync(`${dirPath}/${file}`, 'utf8') };
}

exports.saveFileContent = (file, data) => {
  return fs.writeFile(`${dirPath}/${file}`, data, err => {
    if (err) return console.log(err);
  });
}
