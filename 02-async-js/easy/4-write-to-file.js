const fs = require("fs");


let str = "This is updated file"

fs.writeFile("a.txt",str, (err)=>{
    if(err) throw err
    else{
        console.log("File written successfully")
    }
})
fs.readFile("a.txt","utf-8",(err,data)=>{
    if(err) throw err
    console.log(data);
})