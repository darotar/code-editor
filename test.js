const fs = require('fs');
const src = fs.createReadStream('main.js').pipe(response);

console.log(src);