const fs = require('fs')
fs.readFile('a.txt', (err, inputD) => {
   if (err) throw err;
      console.log(inputD.toString());
})