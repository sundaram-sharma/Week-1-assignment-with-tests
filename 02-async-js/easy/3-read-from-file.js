const fs = require("fs");

fs.readFile("a.txt","utf-8",(err, data)=>{
   if(err) throw err;
   console.log(data)
})